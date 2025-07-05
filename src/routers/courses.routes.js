import express from 'express';
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} from '../controllers/courses.controller.js';

const router = express.Router();

// POST /courses → 201 con id y title
router.post('/', createCourse);

// GET /courses → 200 + array
router.get('/', getAllCourses);

// GET /courses/:id → 200 + course específico
router.get('/:id', getCourseById);

// PUT /courses/:id → 200 + course actualizado o 404
router.put('/:id', updateCourse);

// DELETE /courses/:id → 204
router.delete('/:id', deleteCourse);

export default router;
