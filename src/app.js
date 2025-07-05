import express from 'express';
import coursesRouter from './routers/courses.routes.js';
import studentsRouter from './routers/students.routes.js';

const app = express();
app.use(express.json());

// Routes
app.use('/courses', coursesRouter);
app.use('/students', studentsRouter);

// catch all para el resto de las rutas 
app.use((req, res) => {
  res.sendStatus(404);
});

export default app;