/**
 * Simple test that sequelize connects to database.
 */
import { sequelize } from "./sequelize_config";

 const seq_prom = sequelize
    .authenticate()
    .then(() => printAndQuit("Database connection established."))
    .catch((err) => printAndQuit(`Error - Sequelize failed to connect: ${err}`));

function printAndQuit(msg: string): void {
    const x = console.log(msg);
    sequelize.close();
}