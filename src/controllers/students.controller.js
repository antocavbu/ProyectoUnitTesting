import db from '../db.js';

export const createStudent = async (req, res) => {
  const { name, email } = req.body;
  const [id] = await db('students').insert({ name, email });
  const student = await db('students').where({ id }).first();
  res.status(201).json(student);
};

export const getAllStudents = async (req, res) => {
  const students = await db('students').select();
  res.status(200).json(students);
};

export const getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await db('students').where({ id }).first();
  if (!student) return res.sendStatus(404);
  const courses = await db('courses')
    .join('enrollments', 'courses.id', 'enrollments.course_id')
    .where('enrollments.student_id', id)
    .select('courses.id', 'courses.title');
  res.status(200).json({ ...student, courses });
};

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const count = await db('students').where({ id }).update(req.body);
  if (!count) return res.sendStatus(404);
  const student = await db('students').where({ id }).first();
  res.status(200).json(student);
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const count = await db('students').where({ id }).del();
  if (!count) return res.sendStatus(404);
  res.sendStatus(204);
};
