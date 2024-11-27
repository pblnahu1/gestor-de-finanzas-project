import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "mysecretpassword",
    port: 5444,
});

export const query = (text, params) => pool.query(text, params);
