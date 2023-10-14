import { Pool } from "pg";
import "dotenv/config";

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    ENV,
} = process.env;

let pool: Pool = new Pool({
    host: POSTGRES_HOST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_TEST_DB,
    idleTimeoutMillis: 50000,
    connectionTimeoutMillis: 3000,
    max: 30,
});

if (ENV === "dev") {
    pool = new Pool({
        host: POSTGRES_HOST,
        user: POSTGRES_USER,
        password: "example",
        database: POSTGRES_DB,
        idleTimeoutMillis: 50000,
        connectionTimeoutMillis: 3000,
        max: 30,
    });
}

export default pool;
