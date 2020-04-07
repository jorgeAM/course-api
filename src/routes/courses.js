import express from 'express'
import { allCourses, createCourse } from '../controllers/courses'
import { adminMiddleware, authenticateMiddleware } from '../middlewares'

const router = express.Router()

router.get('/', authenticateMiddleware, adminMiddleware, allCourses)
router.post('/', authenticateMiddleware, adminMiddleware, createCourse)

export default router
