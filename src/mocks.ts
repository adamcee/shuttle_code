/*
 * Mock data to be used with GraphQL
 */
import casual = require("casual");
import { Employer, Employee } from "./interfaces";

casual.define("employee", function(id: number, employerId: number): Employee {
    const e: Employee = {
        id: id,
        employerId: employerId,
        firstName: casual.first_name,
        lastName: casual.last_name,
        email: casual.email,
    };
    return e;
});

casual.define("employer", function(id: number): Employer {
    const e: Employer = {
        id: id,
        name: casual.company_name,
        email: casual.email,
    };
    return e;
});

export function genEmployers(amount: number = 1): Employer[] {
    return [...Array(amount)].map((_, i) => casual.employer(i));
}

export function genEmployees(employerId: number, amount: number = 1): Employee[] {
    return [...Array(amount)].map((_, i) => casual.employee(i, employerId));
}

// Returns an array with `amountPerEmployer` employees for each employer in the array.
export function genEmployeesForEmployers(employers: object[], amountPerEmployer: number = 3): Employee[] {
    return employers.map((employer: Employer, _) => genEmployees(employer.id, amountPerEmployer))
        .reduce((allEmployees, employees) => allEmployees.concat(employees));
}