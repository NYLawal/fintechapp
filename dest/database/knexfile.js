"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
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
exports.default = config;
// npx knex migrate:make --migrations-directory ./src/database/migrations -x ts user
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
