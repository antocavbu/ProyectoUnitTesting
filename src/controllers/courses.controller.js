import db from '../db.js';

// Controller functions
export const createCourse = async (req, res) => {
  const { title } = req.body;
  const [id] = await db('courses').insert({ title });
  const course = await db('courses').where({ id }).first();
  res.status(201).json(course);
};

export const getAllCourses = async (req, res) => {
  const courses = await db('courses').select();
  res.status(200).json(courses);
};

export const getCourseById = async (req, res) => {
  const { id } = req.params;
  const course = await db('courses').where({ id }).first();
  if (!course) return res.sendStatus(404);
  const students = await db('students')
    .join('enrollments', 'students.id', 'enrollments.student_id')
    .where('enrollments.course_id', id)
    .select('students.id', 'students.name', 'students.email');
  res.status(200).json({ ...course, students });
};

export const updateCourse = async (req, res) => {
  const { id } = req.params;
  const count = await db('courses').where({ id }).update({ title: req.body.title });
  if (!count) return res.sendStatus(404);
  const course = await db('courses').where({ id }).first();
  res.status(200).json(course);
};

export const deleteCourse = async (req, res) => {
  const { id } = req.params;
  const count = await db('courses').where({ id }).del();
  if (!count) return res.sendStatus(404);
  res.sendStatus(204);
};

export const enrollStudent = async (req, res) => {
  const courseId  = Number(req.params.courseId);
  const studentId = Number(req.params.studentId);

  // Verificar que existan ambos
  const course  = await db('courses').where({ id: courseId }).first();
  const student = await db('students').where({ id: studentId }).first();
  if (!course || !student) {
    return res.sendStatus(404);
  }

  // Insertar en enrollments (ignorar duplicados)
  await db('enrollments')
    .insert({ course_id: courseId, student_id: studentId })
    .onConflict(['course_id', 'student_id'])
    .ignore();

  return res.sendStatus(204);
};