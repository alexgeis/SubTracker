import { Schema, model } from "mongoose";

const subscriptionModel = new Schema({
	subscriptionName: {
		type: String,
		required: true,
	},
	// A subscription should only have ONE of the following: Monthly Cost OR Annual Cost
	monthlyCost: Number,
	annualCost: Number,
	paymentType: String,
	startDate: { type: Date, default: Date.now },
	// We might want dueDate as a Integer, representing the Day-of-Month
	dueDate: { type: String, default: Date.now },
	autoPay: { type: Boolean, default: false },
	autoRenew: { type: Boolean, default: false },
});

export const Subscription = model("Subscription", subscriptionModel);

// module.exports = Subscription;
