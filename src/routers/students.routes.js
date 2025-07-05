import express from 'express';
import { 
    createStudent,
    getAllStudents
} from '../controllers/students.controller.js';

const router = express.Router();

// POST /students → 201 + student
router.post('/', createStudent);

// GET /students → 200 + array of students
router.get('/', getAllStudents);

export default router;