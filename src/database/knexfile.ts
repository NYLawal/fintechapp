
import { Knex } from "knex";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config(({path: '../../.env'}));

const config: Knex.Config = {
    client: "pg",
    connection: {
        host: "127.0.0.1",
        port: 5432,
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





// npx knex migrate:make --migrations-directory ./src/database/migrations -x ts user
// "knex migrate:latest --knexfile ./src/database/knexfile.ts -x ts",

// module.exports = {

//   development: {
//     client: 'postgresql',
//     connection: {
//       database: 'fintech_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'fintech_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'fintech_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };
