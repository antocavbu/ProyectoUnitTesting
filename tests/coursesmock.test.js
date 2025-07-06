import request from 'supertest';
import app from '../src/app.js';
import db from '../src/db.js';

// Mock de la base de datos
jest.mock('../src/db.js');

describe('Courses with Mocks', () => {
  beforeEach(() => {
    // Limpiar todos los mocks antes de cada test
    jest.clearAllMocks();
  });

  it('GET /courses/:id → 200 with mocked course data', async () => {
    // Datos mock que queremos simular
    const mockCourse = { id: 1, title: 'Mocked Course' };
    const mockStudents = [
      { id: 1, name: 'Alice', email: 'alice@test.com' },
      { id: 2, name: 'Bob', email: 'bob@test.com' }
    ];

    // Configurar el mock para simular las consultas de Knex
    // Primera llamada: db('courses').where({ id }).first()
    const mockCoursesQuery = {
      where: jest.fn().mockReturnValue({
        first: jest.fn().mockResolvedValue(mockCourse)
      })
    };

    // Segunda llamada: db('students').join(...).where(...).select(...)
    const mockStudentsQuery = {
      join: jest.fn().mockReturnValue({
        where: jest.fn().mockReturnValue({
          select: jest.fn().mockResolvedValue(mockStudents)
        })
      })
    };

    // Configurar db() para devolver diferentes objetos según la tabla
    db.mockImplementation((table) => {
      if (table === 'courses') return mockCoursesQuery;
      if (table === 'students') return mockStudentsQuery;
      return {};
    });

    // Ejecutar la petición HTTP
    const response = await request(app)
      .get('/courses/1')
      .expect(200);

    // Verifica que el resultado es el esperado
    expect(response.body).toEqual({
      id: 1,
      title: 'Mocked Course',
      students: mockStudents
    });

    //Verifica que los mocks fueron llamados correctamente
    expect(db).toHaveBeenCalledWith('courses');
    expect(db).toHaveBeenCalledWith('students');
    expect(mockCoursesQuery.where).toHaveBeenCalledWith({ id: '1' });
    expect(mockStudentsQuery.join).toHaveBeenCalledWith('enrollments', 'students.id', 'enrollments.student_id');
  });
});