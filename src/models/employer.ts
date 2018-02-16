/**
 * employer.ts
 * employer model
 */
import { Table, Column, Model, HasMany, AllowNull, CreatedAt, UpdatedAt, DeletedAt, 
    PrimaryKey, AutoIncrement, Scopes } from "sequelize-typescript";
import { Employee } from "./employee";

@Scopes({
    employees: {
      include: [{
        model: () => Employee,
        through: {attributes: []},
      }],
    }
})
@Table
export class Employer extends Model<Employer> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @HasMany(() => Employee)
    employees;

    @AllowNull(false)
    @Column
    name: string;

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