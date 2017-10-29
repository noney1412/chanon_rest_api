import {} from "dotenv/config";

/* ------------ */
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "./config/mongoose";

import { schema, userData } from "./data/index";

/* ------------ cors -> mongoose -> express -> graphql */
const port = parseInt(process.env.PORT, 10) || 3000;

mongoose.connect(process.env.MONGO_URL, {
  useMongoClient: true
});

const app = express();

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema, context: { userData } })
);

app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(port);

console.log("http://localhost:3000");
console.log("http://localhost:3000/graphiql");
