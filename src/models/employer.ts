/**
 * employer.ts
 * employer model
 */
import { Table, Column, Model, HasMany, AllowNull, CreatedAt, UpdatedAt, DeletedAt } from "sequelize-typescript";

@Table
class Employer extends Model<Employer> {
    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column
    city: string;

    @AllowNull(false)
    @Column
    state: string;

    @AllowNull(false)
    @Column
    zip: string;

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