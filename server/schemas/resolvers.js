const { AuthenticationError } = require("apollo-server-express");
const { User, Subscription } = require("../models");
const { signToken } = require("../utils/auth");
// import { resolvers as scalarResolvers } from "graphql-scalars";

const resolvers = {
  // ScalarName: ScalarNameResolver,

  Query: {
    users: async () => {
      return await User.find().populate("subscriptions");
    },
    subscriptions: async () => {
      return await Subscription.find({});
    },

    subscription: async (parent, { subscriptionId }) => {
      return await Subscription.findOne({ _id: subscriptionId });
    },
  },

  Mutation: {
    //LOGIN
    login: async (parent, { username, password }) => {
      console.log("login resolver function");
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No user with this username found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    //CREATE MUTATIONS
    createUser: async (parent, { username, password, email }) => {
      const user = User.create({ username, password, email });
      const token = signToken(user);

      return { token, user };
    },
    createSubscription: async (
      parent,
      {
        userId,
        subscriptionName,
        monthlyCost,
        annualCost,
        paymentType,
        startDate,
        dueDate,
        autoPay,
        autoRenew,
      },
      context
    ) => {
      if (context.user) {
        const newSub = await Subcription.create({
          subscriptionName,
          monthlyCost,
          annualCost,
          paymentType,
          startDate,
          dueDate,
          autoPay,
          autoRenew,
        });
        return await User.findByIdAndUpdate(
          userId,
          {
            $addToSet: {
              subscriptions: newSub._id,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        ).populate("subscriptions");
        // const token = signToken(context.user);

        // return { token, newSub };
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    //UPDATE MUTATIONS - NEED TO ADD TOKENS
    updateUser: async (parent, { _id, username, password, email }) => {
      return await User.findOneAndUpdate(
        { _id },
        { username, password, email },
        { new: true }
      );
    },
    updateSubscription: async (
      parent,
      {
        _id,
        subscriptionName,
        monthlyCost,
        annualCost,
        paymentType,
        startDate,
        dueDate,
        autoPay,
        autoRenew,
      }
    ) => {
      return await Subscription.findOneAndUpdate(
        { _id },
        {
          subscriptionName,
          monthlyCost,
          annualCost,
          paymentType,
          startDate,
          dueDate,
          autoPay,
          autoRenew,
        },
        { new: true }
      );
    },
    //DELETE MUTATIONS
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeSubscription: async (parent, { subscription }) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { subscriptions: subscription } },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
