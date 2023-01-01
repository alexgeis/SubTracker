import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import pkg from "body-parser";
const { json } = pkg;
import { authMiddleware } from "./utils/auth.js";

import { typeDefs } from "./schemas/typeDefs.js";
import { resolvers } from "./schemas/resolvers.js";
import db from "./config/connection.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
	express.static(path.join(__dirname, "..", "client", "build", "static"))
);

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

if (process.env.NODE_ENV === "production") {
	// app.use(express.static(path.join(__dirname, "../client/build")));

	// app.use(express.static(path.join(__dirname, "../client/build/static")));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
	});
}

const startApolloServer = async () => {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});
	await server.start();
	// server.applyMiddleware({ app }); // depracated from apollo-server-3
	app.use(
		"/graphql",
		cors(),
		json(),
		expressMiddleware(server, {
			context: authMiddleware,
		})
	);
	console.log("enter");
	db.once("open", () => console.log("HEYYYYYY"));
	// db.once("open", () => {
	// 	app.listen(PORT, () => {
	// 		console.log(`API server running on port ${PORT}!`);
	// 		console.log(
	// 			`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
	// 		);
	// 	});
	// });
	console.log("exit");
};
startApolloServer();

// const startApolloServer = async (typeDefs, resolvers) => {
// 	await server.start();
// 	// server.applyMiddleware({ app }); // depracated from apollo-server-3
// 	app.use(
// 		"/graphql",
// 		cors(),
// 		json(),
// 		expressMiddleware(server, {
// 			context: authMiddleware,
// 		})
// 	);

// 	db.once("open", () => {
// 		app.listen(PORT, () => {
// 			console.log(`API server running on port ${PORT}!`);
// 			console.log(
// 				`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
// 			);
// 		});
// 	});
// };

// startApolloServer(typeDefs, resolvers);
