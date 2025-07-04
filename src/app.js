import express from 'express';

const app = express();
app.use(express.json());

const courses = [];
let nextCourseId = 1;

// POST /courses → 201 con id y title
app.post('/courses', (req, res) => {
  const course = { id: nextCourseId++, ...req.body };
  res.status(201).json(course);
});

// GET /courses → 200 + array
app.get('/courses', (req, res) => {
  res.status(200).json(courses);
});

// catch all para el resto de las rutas 
app.use((req, res) => {
  res.sendStatus(404);
});

export default app;