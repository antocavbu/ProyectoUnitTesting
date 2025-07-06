// tests/enrollments.test.js
import request from 'supertest';
import app     from '../src/app.js';

describe('Enrollment endpoints (Red → Green)', () => {
  let course, student;

  beforeEach(async () => {
    // Creamos un curso y un estudiante para usar en cada test
    const courseRes = await request(app)
      .post('/courses')
      .send({ title: 'Course 1' })
      .expect(201);
    course = courseRes.body;

    const studentRes = await request(app)
      .post('/students')
      .send({ name: 'Student 1', email: 's1@example.com' })
      .expect(201);
    student = studentRes.body;
  });

  it('POST /courses/:courseId/enroll/:studentId → 404 si no existe curso o estudiante', async () => {
  // curso inválido
  await request(app)
    .post(`/courses/999/enroll/${student.id}`)
    .expect(404);

  // estudiante inválido
  await request(app)
    .post(`/courses/${course.id}/enroll/999`)
    .expect(404);
});

  it('POST /courses/:courseId/enroll/:studentId → 204 (inscripción exitosa)', async () => {
    await request(app)
      .post(`/courses/${course.id}/enroll/${student.id}`)
      .expect(204);
  });

  it('GET /courses/:id incluye al estudiante inscrito', async () => {
    await request(app)
      .post(`/courses/${course.id}/enroll/${student.id}`)
      .expect(204);

    const res = await request(app)
      .get(`/courses/${course.id}`)
      .expect(200);

    expect(res.body.students).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: student.id, name: student.name, email: student.email })
      ])
    );
  });

  it('GET /students/:id incluye el curso inscrito', async () => {
    await request(app)
      .post(`/courses/${course.id}/enroll/${student.id}`)
      .expect(204);

    const res = await request(app)
      .get(`/students/${student.id}`)
      .expect(200);

    expect(res.body.courses).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: course.id, title: course.title })
      ])
    );
  });
});
