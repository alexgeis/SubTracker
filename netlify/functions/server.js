///// example code
// import express from "express";
// import serverless from "serverless-http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import cors from "cors";
import pkg from "body-parser";
const { json } = pkg;
import { authMiddleware } from "../../server/utils/auth.js";

import { typeDefs } from "../../server/schemas/typeDefs.js";
import { resolvers } from "../../server/schemas/resolvers.js";
import db from "../../server/config/connection.js";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

exports.handler = async function (event, context) {
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

	//start apollo graphql server
	await new Promise((resolve) => {
		httpServer.listen({ port: GRAPHQL_PORT }, resolve);
		console.log(`Use GraphQL at http://localhost:${GRAPHQL_PORT}/graphql`);
	});

	return new Promise((yay, nay) => {
		const cb = (err, args) => (err ? nay(err) : yay(args));
		server.createHandler()(event, context, cb);
	});
};
