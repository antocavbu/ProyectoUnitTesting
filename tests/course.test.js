import request from 'supertest';
import app from '../src/app.js';

describe('Course CRUD (Red)', () => {
  it('POST /courses → debería fallar con 404 (sin ruta aún implementada)', () =>
    request(app)
      .post('/courses')
      .send({ title: 'JS Basics' })
      .expect(404)
  );
});