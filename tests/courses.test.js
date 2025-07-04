import request from 'supertest';
import app from '../src/app.js';

describe('Course CRUD (Red → Green)', () => {
  // --- Nuevo test RED:
  it('GET /courses → 404 mientras no exista la ruta', () =>
    request(app)
      .get('/courses')
      .expect(200)
      .expect(res => {
        if (!Array.isArray(res.body)) {
          throw new Error('Se esperaba un array');
        }
      })
  );

  
  // --- Test GREEN: Post para crear un curso
  it('POST /courses → 201 con id y title', () =>
    request(app)
      .post('/courses')
      .send({ title: 'JS Basics' })
      .expect(201)
      .expect(res => {
        if (!res.body.id) throw new Error('Falta id');
        if (res.body.title !== 'JS Basics') throw new Error('Title incorrecto');
      })
  );
  // Test RED de GET /courses/:id
  it('GET /courses/:id → debería devolver 200 y el curso correcto, pero da 404', () =>
    request(app)
      .get('/courses/1')
      .expect(200)
      .expect(res => {
        if (res.body.id !== 1) throw new Error('ID incorrecto');
      })
  );

});