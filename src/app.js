import express from 'express';

const app = express();
app.use(express.json());

// POST /courses → 201 con id y title
let nextCourseId = 1;
app.post('/courses', (req, res) => {
  const course = { id: nextCourseId++, ...req.body };
  res.status(201).json(course);
});

// catch all para el resto de las rutas 
app.use((req, res) => {
  res.sendStatus(404);
});

export default app;