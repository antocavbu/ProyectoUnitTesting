import request from 'supertest';
import app     from '../src/app.js';

describe('Student CRUD (Red → Green)', () => {
  // test para crear un estudiante
  it('POST /students → debería devolver 201 y body.id, name, email (Red)', () =>
    request(app)
      .post('/students')
      .send({ name: 'Alice', email: 'alice@example.com' })
      .expect(201)
      .expect(res => {
        if (!res.body.id) throw new Error('Falta id');
        if (res.body.name !== 'Alice') throw new Error('Name incorrecto');
        if (res.body.email !== 'alice@example.com') throw new Error('Email incorrecto');
      })
  );
  
  // test para Get Students
  it('GET /students → debería devolver 200 y un array', () =>
    request(app)
      .get('/students')
      .expect(200)
      .expect(res => {
        if (!Array.isArray(res.body)) {
          throw new Error('Se esperaba un array');
        }
      })
  );
});