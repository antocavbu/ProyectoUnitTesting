/** @param { import("knex").Knex } knex */
exports.up = async function(knex) {
  await knex.schema.createTable('students', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.timestamps(true, true);
  });
};

/** @param { import("knex").Knex } knex */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('students');
};