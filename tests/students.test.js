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
 
  // test para obtener un estudiante por ID
  it('GET /students/:id → debería devolver 200 con el estudiante correcto (Red)', async () => {
    // Creamos un estudiante
    const post = await request(app)
      .post('/students')
      .send({ name: 'Bob', email: 'bob@example.com' })
      .expect(201);

    const id = post.body.id;

    // Intentamos obtenerlo por ID → falla (ruta no implementada)
    await request(app)
      .get(`/students/${id}`)
      .expect(200)
      .expect(res => {
        if (res.body.id !== id) throw new Error('ID incorrecto');
      });
  });

  // test para actualizar un estudiante por ID
  it('PUT /students/:id → debería devolver 200 con datos actualizados (Red)', async () => {
    // 1) Creamos un estudiante
    const post = await request(app)
      .post('/students')
      .send({ name: 'Charlie', email: 'charlie@example.com' })
      .expect(201);

    const id = post.body.id;

    // 2) Intentamos actualizarlo
    await request(app)
      .put(`/students/${id}`)
      .send({ name: 'Charlie Brown' })
      .expect(200)
      .expect(res => {
        if (res.body.name !== 'Charlie Brown') {
          throw new Error(`Name no actualizado, vino ${res.body.name}`);
        }
      });
  });
  it('DELETE /students/:id → 204 y luego 404 al reconsultar', async () => {
    // 1) Creamos un estudiante
    const post = await request(app)
      .post('/students')
      .send({ name: 'Diana', email: 'diana@example.com' })
      .expect(201);
    const id = post.body.id;
    // 2) Lo borramos
    await request(app)
      .delete(`/students/${id}`)
      .expect(204);
    // 3) Al pedirlo de nuevo → 404
    await request(app)
      .get(`/students/${id}`)
      .expect(404);
  });
});

  describe('Error handling for /students', () => {
  it('PUT /students/:id → 404 when student does not exist', () =>
    request(app)
      .put('/students/9999')
      .send({ name: 'Nobody' })
      .expect(404)
  );

  it('DELETE /students/:id → 404 when student does not exist', () =>
    request(app)
      .delete('/students/9999')
      .expect(404)
  );
});