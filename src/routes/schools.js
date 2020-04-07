import express from 'express'
import {
  allGrades,
  createGrade,
  getGrade,
  deleteGrade,
  updateGrade
} from '../controllers/grades'
import {
  adminMiddleware,
  superAdminMiddleware,
  authenticateMiddleware
} from '../middlewares'
import {
  allSchools,
  createSchool,
  deleteSchool,
  getSchool,
  getTeacher
} from '../controllers/schools'

const router = express.Router()

router.get('/', authenticateMiddleware, superAdminMiddleware, allSchools)
router.get('/:id', authenticateMiddleware, getSchool)
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
router.get(
  '/:id/grades/:gradeId',
  authenticateMiddleware,
  superAdminMiddleware,
  getGrade
)
router.put(
  '/:id/grades/:gradeId',
  authenticateMiddleware,
  superAdminMiddleware,
  updateGrade
)
router.delete(
  '/:id/grades/:gradeId',
  authenticateMiddleware,
  superAdminMiddleware,
  deleteGrade
)

export default router
