/**
 * Express server
 */
const express = require("express");
const bodyParser = require("body-parser");
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import schema from "./schema";
import resolvers from "./resolvers";

const app = express();

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Go to http://localhost:3000/graphiql to run queries!");
});