// Data storage (in-memory)
const courses = [];
let nextCourseId = 1;

// Controller functions
export const createCourse = (req, res) => {
  const course = { id: nextCourseId++, ...req.body };
  courses.push(course);
  res.status(201).json(course);
};

export const getAllCourses = (req, res) => {
  res.status(200).json(courses);
};

export const getCourseById = (req, res) => {
  const course = courses.find(c => c.id === Number(req.params.id));
  if (!course) return res.sendStatus(404);
  res.status(200).json(course);
};

export const updateCourse = (req, res) => {
  const id = Number(req.params.id);
  const idx = courses.findIndex(c => c.id === id);
  if (idx === -1) return res.sendStatus(404);
  courses[idx] = { ...courses[idx], ...req.body };
  res.status(200).json(courses[idx]);
};

export const deleteCourse = (req, res) => {
  const id = Number(req.params.id);
  const idx = courses.findIndex(c => c.id === id);
  if (idx === -1) return res.sendStatus(404);
  courses.splice(idx, 1);
  res.sendStatus(204);
};