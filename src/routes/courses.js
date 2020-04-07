import express from 'express'
import { createWeek } from '../controllers/weeks'
import { allCourses, createCourse } from '../controllers/courses'
import { adminMiddleware, authenticateMiddleware } from '../middlewares'

const router = express.Router()

router.get('/', authenticateMiddleware, adminMiddleware, allCourses)
router.post('/', authenticateMiddleware, adminMiddleware, createCourse)
router.post('/:id/weeks', authenticateMiddleware, createWeek)

export default router
