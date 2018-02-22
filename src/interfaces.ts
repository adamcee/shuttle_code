/*
 * Typescript interfaces for GraphQL schema
 */
export interface Employer {
    id: number;
    name: string;
    email: string;
}

export interface Employee {
    id: number;
    employerId: number;
    firstName: string;
    lastName: string;
    email: string;
}