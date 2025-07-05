import express from 'express';
import { createStudent } from '../controllers/students.controller.js';

const router = express.Router();

// POST /students → 201 + student
router.post('/', createStudent);

export default router;