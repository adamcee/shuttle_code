/*
 * GraphQL Schema
 */
 import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";

 const typeDefs = `
 type Query {
     employer(id: Int): Employer
     allEmployers: [Employer]
     employee(id: Int): Employee
     allEmployees: [Employee]
     allEmployeesOf(employerId: Int): [Employee]
 }

 type Employer {
     id: Int
     name: String
     email: String
 }

 type Employee {
     id: Int
     employer_id: Int
     firstName: String
     lastName: String
     email: String
 }
 `;

 const schema = makeExecutableSchema({ typeDefs });

 export default schema;