import request from 'supertest';
import app from '../src/app.js';

describe('Course CRUD (Red → Green)', () => {
  // --- Nuevo test RED: para todas las rutas que no existen
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

  
  // --- Test : Post para crear un curso
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
  // Test de GET para buscar un curso por id 
  it('GET /courses/:id → 200 con el curso correcto tras crearlo', async () => {
    // 1. Creamos un curso
    const postRes = await request(app)
      .post('/courses')
      .send({ title: 'JS Basics' })
      .expect(201);

    const createdId = postRes.body.id;

    // 2. Luego pedimos ese curso por id
    const getRes = await request(app)
      .get(`/courses/${createdId}`)
      .expect(200);

    // 3. Comprobamos que el id y title coincidan
    if (getRes.body.id !== createdId) {
      throw new Error(`Esperaba id ${createdId}, pero vino ${getRes.body.id}`);
    }
    if (getRes.body.title !== 'JS Basics') {
      throw new Error(`Esperaba title 'JS Basics', pero vino '${getRes.body.title}'`);
    }
  });

  // Test Put para actualizar un curso
  it('PUT /courses/:id → debería devolver 200 y curso actualizado (Red)', async () => {
    // Creamos un curso nuevo
    const post = await request(app)
      .post('/courses')
      .send({ title: 'Old Title' })
      .expect(201);

    const id = post.body.id;

    // Ahora intentamos actualizarlo
    await request(app)
      .put(`/courses/${id}`)
      .send({ title: 'New Title' })
      .expect(200)
      .expect(res => {
        if (res.body.title !== 'New Title') {
          throw new Error(`Title no fue actualizado, vino ${res.body.title}`);
        }
      });
  });
  // Test Delete para borrar un curso" 
  it('DELETE /courses/:id → debería devolver 204 y luego 404 al reconsultar', async () => {
    // 1) Creamos un curso
    const post = await request(app)
      .post('/courses')
      .send({ title: 'To Be Deleted' })
      .expect(201);

    const id = post.body.id;

    // 2) Intentamos borrarlo
    await request(app)
      .delete(`/courses/${id}`)
      .expect(204);

    // 3) Y al pedirlo de nuevo, ya no existe → 404
    await request(app)
      .get(`/courses/${id}`)
      .expect(404);
  });

});

describe('Error handling for /courses', () => {
  it('PUT /courses/:id → 404 when course does not exist', () =>
    request(app)
      .put('/courses/9999')
      .send({ title: 'No Title' })
      .expect(404)
  );

  it('DELETE /courses/:id → 404 when course does not exist', () =>
    request(app)
      .delete('/courses/9999')
      .expect(404)
  );
});