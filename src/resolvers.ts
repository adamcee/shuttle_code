/*
 * GraphQL resolvers
 */
import { mockEmployees, mockEmployers } from "./mocks";
 const resolvers = {
     Query: {
         employers: () => mockEmployers,
         employees: () => mockEmployees,
     }
 };

 export default resolvers;