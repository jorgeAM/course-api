import express from 'express'
import { createWeek, allWeeks } from '../controllers/weeks'
import { allCourses, createCourse } from '../controllers/courses'
import {
  adminMiddleware,
  authenticateMiddleware,
  availableCourseMiddleware
} from '../middlewares'

const router = express.Router()

router.get('/', authenticateMiddleware, adminMiddleware, allCourses)
router.post('/', authenticateMiddleware, adminMiddleware, createCourse)
router.get(
  '/:id/weeks',
  authenticateMiddleware,
  availableCourseMiddleware,
  allWeeks
)
router.post(
  '/:id/weeks',
  authenticateMiddleware,
  availableCourseMiddleware,
  createWeek
)

export default router
