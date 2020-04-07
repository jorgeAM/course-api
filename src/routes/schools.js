import express from 'express'
import { allGrades, createGrade } from '../controllers/grades'
import { superAdminMiddleware, authenticateMiddleware } from '../middlewares'
import { allSchools, createSchool, DeleteSchool } from '../controllers/schools'

const router = express.Router()

router.get('/', authenticateMiddleware, superAdminMiddleware, allSchools)
router.post('/', authenticateMiddleware, superAdminMiddleware, createSchool)
router.delete('/', authenticateMiddleware, superAdminMiddleware, DeleteSchool)
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
