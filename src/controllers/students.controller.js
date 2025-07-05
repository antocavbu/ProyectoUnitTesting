const students = [];
let nextStudentId = 1;

export const createStudent = (req, res) => {
  const student = { id: nextStudentId++, ...req.body };
  students.push(student);
  res.status(201).json(student);
};

export const getAllStudents = (req, res) => {
  res.status(200).json(students);
};

export const getStudentById = (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(s => s.id === id);
  if (!student) return res.sendStatus(404);
  res.status(200).json(student);
};

// PUT /students/:id → 200 + student actualizado o 404
export const updateStudent = (req, res) => {
  const id = Number(req.params.id);
  const idx = students.findIndex(s => s.id === id);
  if (idx === -1) return res.sendStatus(404);
  students[idx] = { ...students[idx], ...req.body };
  res.status(200).json(students[idx]);
};

// DELETE /students/:id → 204
export const deleteStudent = (req, res) => {
  const id = Number(req.params.id);
  const idx = students.findIndex(s => s.id === id);
  if (idx === -1) return res.sendStatus(404);
  students.splice(idx, 1);
  res.sendStatus(204);
};


