import express from 'express';
import coursesRouter from './routers/courses.routes.js';
import studentsRouter from './routers/students.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/courses', coursesRouter);
app.use('/students', studentsRouter);

// catch all para el resto de las rutas 
app.use((req, res) => {
  res.sendStatus(404);
});

// Solo iniciar servidor si no estamos en testing
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}

export default app;