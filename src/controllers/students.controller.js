const students = [];
let nextStudentId = 1;

export const createStudent = (req, res) => {
  const student = { id: nextStudentId++, ...req.body };
  students.push(student);
  res.status(201).json(student);
};