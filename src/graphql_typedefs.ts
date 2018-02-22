/*
 * GraphQL Type Definitions
 */
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

 export default typeDefs;