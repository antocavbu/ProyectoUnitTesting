import express from 'express';

const app = express();
app.use(express.json());

const courses = [];
let nextCourseId = 1;

// POST /courses → 201 con id y title
app.post('/courses', (req, res) => {
  const course = { id: nextCourseId++, ...req.body };
  courses.push(course);  // ← ¡Agregar esta línea!
  res.status(201).json(course);
});

// GET /courses → 200 + array
app.get('/courses', (req, res) => {
  res.status(200).json(courses);
});

// GET /courses/:id
app.get('/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === Number(req.params.id));
  if (!course) return res.sendStatus(404);
  res.status(200).json(course);
});

// PUT /courses/:id → 200 + course actualizado o 404
app.put('/courses/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = courses.findIndex(c => c.id === id);
  if (idx === -1) return res.sendStatus(404);
  courses[idx] = { ...courses[idx], ...req.body };
  res.status(200).json(courses[idx]);
});

// catch all para el resto de las rutas 
app.use((req, res) => {
  res.sendStatus(404);
});

export default app;