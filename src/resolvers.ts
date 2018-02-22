/*
 * GraphQL resolvers
 */
import { genEmployers, genEmployeesForEmployers } from "./mocks";

const employers = genEmployers(2);
const employees = genEmployeesForEmployers(employers);

console.log("employers: " + JSON.stringify(employers));
console.log("employees: " + JSON.stringify(employees));

 const resolvers = {
     Query: {
         employers: () => employers,
         employees: () => employees,
     }
 };

 export default resolvers;