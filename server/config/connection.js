const mongoose = require("mongoose");

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/subscription-tracker",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

export default db = mongoose.connection;

// module.exports = mongoose.connection;
