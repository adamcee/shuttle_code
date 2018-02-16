/**
 * employee.ts
 * employee model
 */
import { Table, Column, Model, HasMany, AllowNull, CreatedAt, UpdatedAt, DeletedAt } from "sequelize-typescript";

@Table
class Employee extends Model<Employee> {
    @Column
    @AllowNull(false)
    first_name: string;

    @Column
    @AllowNull(false)
    last_name: string;

    @Column
    @AllowNull(false)
    date_of_birth: Date;

    @Column
    @CreatedAt
    creationDate: Date;

    @Column
    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    @Column
    deletionDate: Date;
}