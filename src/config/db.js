import { createPool } from "mysql2/promise"
export const pool = createPool({
    host: "localhost",
    user: "root",
    password: "ADMIN",
    database: "biblioteca",
    port: 3306,
    waitForConnections: true,
})