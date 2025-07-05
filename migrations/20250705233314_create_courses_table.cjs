
/** @param { import("knex").Knex } knex */
exports.up = async function(knex) {
  await knex.schema.createTable('courses', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.timestamps(true, true);
  });
};

/** @param { import("knex").Knex } knex */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('courses');
};