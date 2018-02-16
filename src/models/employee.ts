/**
 * employee.ts
 * employee model
 */
import { Table, Column, Model, HasMany, AllowNull, CreatedAt, UpdatedAt, DeletedAt,
    PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, IsEmail } from "sequelize-typescript";
import { Employer } from "./employer";

@Table
export class Employee extends Model<Employee> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @ForeignKey(() => Employer)
    @Column
    employerId: number;

    @BelongsTo(() => Employer)
    employer;

    @AllowNull(false)
    @Column
    first_name: string;

    @AllowNull(false)
    @Column
    last_name: string;

    @AllowNull(false)
    @IsEmail
    @Column
    email: string;

    @Column
    phone_number: number;

    @CreatedAt
    @Column
    creationDate: Date;

    @UpdatedAt
    @Column
    updatedOn: Date;

    @DeletedAt
    @Column
    deletionDate: Date;
}