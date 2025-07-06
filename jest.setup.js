import db from './src/db.js';

beforeAll(async () => {
  // Aplica todas las migraciones en la BD de test (SQLite en memoria)
  await db.migrate.latest();
});

beforeEach(async () => {
  // Borra todas las tablas para partir con datos limpios
  await db('enrollments').del();
  await db('students').del();
  await db('courses').del();
});

afterAll(async () => {
  // Cierra la conexión cuando termine todo
  await db.destroy();
});