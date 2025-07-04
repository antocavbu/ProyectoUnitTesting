import express from 'express';

const app = express();
app.use(express.json());

// Stub: cualquier ruta → 404 sin patrón de ruta
app.use((req, res) => {
  res.sendStatus(404);
});

export default app;