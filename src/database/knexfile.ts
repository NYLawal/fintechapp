
import { Knex } from "knex";
import dotenv from 'dotenv';

dotenv.config(({path: '../../.env'}));

const config: Knex.Config = {
    client: "pg",
    connection: {
        host: "127.0.0.1",
        port: Number(String(process.env.DATABASE_PORT)),
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    },
    migrations: {
        directory: "./migrations",
        extension: "ts",
    },
};

export default config;

