import mongoose from "mongoose";

mongoose.set("strictQuery", false);
/*
DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
*/

// mongoose.connect(
// 	process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/subscription-tracker",
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	}
// );

const dev_DB_URL =
	"mongodb+srv://cacheAlex:PaperTiger91@cachebandit.l5flp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || dev_DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
export default db;

// module.exports = mongoose.connection;
