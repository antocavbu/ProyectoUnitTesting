import express from 'express';
import { 
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} from '../controllers/students.controller.js';

const router = express.Router();

// POST /students → 201 + student
router.post('/', createStudent);

// GET /students → 200 + array of students
router.get('/', getAllStudents);

// GET /students/:id → 200 + student específico
router.get('/:id', getStudentById);

// PUT /students/:id → 200 + student actualizado o 404
router.put('/:id', updateStudent);

// DELETE /students/:id → 204
router.delete('/:id', deleteStudent);

export default router;