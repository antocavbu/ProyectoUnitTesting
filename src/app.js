import express from 'express';
import coursesRouter from './routers/courses.routes.js';

const app = express();
app.use(express.json());

// Routes
app.use('/courses', coursesRouter);

// catch all para el resto de las rutas 
app.use((req, res) => {
  res.sendStatus(404);
});

export default app;