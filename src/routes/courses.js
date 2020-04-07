import express from 'express'
import { createWeek, allWeeks } from '../controllers/weeks'
import { allTabs, createTab } from '../controllers/tabs'
import { allAttributes, createAttributes } from '../controllers/attributes'
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
router.get(
  '/:id/weeks/:weekId/tabs',
  authenticateMiddleware,
  availableCourseMiddleware,
  allTabs
)
router.post(
  '/:id/weeks/:weekId/tabs',
  authenticateMiddleware,
  availableCourseMiddleware,
  createTab
)

router.get(
  '/:id/weeks/:weekId/tabs/:tabId/attributes',
  authenticateMiddleware,
  availableCourseMiddleware,
  allAttributes
)
router.post(
  '/:id/weeks/:weekId/tabs/:tabId/attributes',
  authenticateMiddleware,
  availableCourseMiddleware,
  createAttributes
)

export default router
