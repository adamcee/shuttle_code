/**
 * Express server
 */


const express = require("express");
const bodyParser = require("body-parser");
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";


const mockEmployers = [
    {
        id: 0,
        name: "XYZ Widgets",
        email: "info@xyzwidgets.com",
    },
    {
        id: 1,
        name: "Weyland Yutani",
        email: "corp@weylandyutani.com",
    },
];

const mockEmployees = [
    {
        id: 0,
        employerId: 1,
        firstName: "Ellen",
        lastName: "Ripley",
        email: "eripley@weylandyutani.com",
    },
    {
        id: 1,
        employerId: 0,
        firstName: "Thomas",
        lastName: "Pynchon",
        email: "tpynchon@xyzwidgets.com",
    },
];

// employee(id: Int): Employee
// employer(id: Int): Employer

const typeDefs = `
 type Query {
     employers: [Employer]
     employees: [Employee]
     employeesOf(employerId: Int): [Employee]
 }

 type Employer {
     id: Int
     name: String
     email: String
 }

 type Employee {
     id: Int
     employerId: Int
     firstName: String
     lastName: String
     email: String
 }
 `;

 const resolvers = {
     Query: {
         employers: () => mockEmployers,
         employees: () => mockEmployees,
     }
 };

 const schema = makeExecutableSchema({ typeDefs, resolvers });

 export default schema;

const app = express();

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!');
});