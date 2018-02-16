/**
 * employee.ts
 * employee model
 */
import { Table, Column, Model, HasMany } from "sequelize-typescript";

@Table
class Employee extends Model<Employee> {
    @Column
    first_name: string;

    @Column
    last_name: string;

    @Column
    date_of_birth: Date;
}