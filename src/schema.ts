/*
 * GraphQL Schema
 */
 import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";

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

 const schema = makeExecutableSchema({ typeDefs });

 export default schema;