

/** @param { import("knex").Knex } knex */
exports.up = async function(knex) {
  await knex.schema.createTable('enrollments', table => {
    table.integer('course_id').unsigned().notNullable()
         .references('id').inTable('courses')
         .onDelete('CASCADE');
    table.integer('student_id').unsigned().notNullable()
         .references('id').inTable('students')
         .onDelete('CASCADE');
    table.primary(['course_id','student_id']);
    table.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('enrollments');
};