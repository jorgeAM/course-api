import express from 'express'
import { allGrades, createGrade } from '../controllers/grades'
import {
  adminMiddleware,
  superAdminMiddleware,
  authenticateMiddleware
} from '../middlewares'
import {
  allSchools,
  createSchool,
  deleteSchool,
  getTeacher
} from '../controllers/schools'

const router = express.Router()

router.get('/', authenticateMiddleware, superAdminMiddleware, allSchools)
router.post('/', authenticateMiddleware, superAdminMiddleware, createSchool)
router.delete('/', authenticateMiddleware, superAdminMiddleware, deleteSchool)
router.get('/:id/teachers', authenticateMiddleware, adminMiddleware, getTeacher)
router.get(
  '/:id/grades',
  authenticateMiddleware,
  superAdminMiddleware,
  allGrades
)
router.post(
  '/:id/grades',
  authenticateMiddleware,
  superAdminMiddleware,
  createGrade
)

export default router
