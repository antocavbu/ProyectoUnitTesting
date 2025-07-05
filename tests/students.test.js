import request from 'supertest';
import app     from '../src/app.js';

describe('Student CRUD (Red → Green)', () => {
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
});