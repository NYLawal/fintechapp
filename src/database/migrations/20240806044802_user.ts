import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
    .createTable('users', function (table) {
      table.increments('id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}

