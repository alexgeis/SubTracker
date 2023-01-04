import express from "express";
// import serverless from "serverless-http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
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
const GRAPHQL_PORT = 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "client", "build")));

// routes
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

if (process.env.NODE_ENV === "production") {
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
	});
}

// connect to mongo db and spin up express server
db.once("open", () => {
	// start express app
	app.listen(PORT, () => {
		console.log(`API server running on port ${PORT}!`);
	});
});

// apollo server for graphql
const httpServer = http.createServer(app);
const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
	"/graphql",
	cors(),
	json(),
	expressMiddleware(server, {
		context: authMiddleware,
	})
);

// start apollo graphql server
await new Promise((resolve) => {
	httpServer.listen({ port: GRAPHQL_PORT }, resolve);
	console.log(`Use GraphQL at http://localhost:${GRAPHQL_PORT}/graphql`);
});

// serverless-http wrapping of app for severless function use
// const functionName = "server";
// const routerBasePath =
// 	process.env.NODE_ENV === "dev"
// 		? `/${functionName}`
// 		: `/.netlify/functions/${functionName}/`;
// app.get(routerBasePath, (req, res) => {
// 	res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
// });
// handler export for lambda functions
// exports.handler = serverless(app);
// const handler = serverless(app);
// exports.handler = async (event, context) => {
// 	const result = await handler(event, context);
// 	return result;
// };
