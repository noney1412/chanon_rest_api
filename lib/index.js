import {} from "dotenv/config";

/* ------------ */
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import resolvers from "./data/resolver";
import typeDefs from "./data/schema";

const schema = makeExecutableSchema({ typeDefs, resolvers });
const port = parseInt(process.env.PORT, 10) || 3000;

const app = express();

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema })); 

app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(port);

console.log("http://localhost:3000");
