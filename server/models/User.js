import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { Subscription } from "./Subscription.js";

const userModel = new Schema({
	username: {
		type: String,
		required: true,
		minLength: 6,
		maxLength: 36,
	},
	password: {
		type: String,
		required: true,
		minLength: 6,
		maxLength: 36,
	},
	darkmode: {
		type: Boolean,
		default: false,
	},
	email: {
		type: String,
		required: true,
	},
	subscriptions: [
		{
			type: Schema.Types.ObjectId,
			ref: "Subscription",
		},
	],
});

//BCRYPT HASH PASSWORD CODE
userModel.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

userModel.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

export const User = model("User", userModel);

// module.exports = User;
