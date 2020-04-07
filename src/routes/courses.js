import express from 'express'
import { createWeek, allWeeks, getWeek, updateWeek } from '../controllers/weeks'
import { allTabs, createTab } from '../controllers/tabs'
import { allAttributes, createAttributes } from '../controllers/attributes'
import {
  allCourses,
  createCourse,
  getCourse,
  deleteCourse,
  updateCourse
} from '../controllers/courses'
import {
  adminMiddleware,
  authenticateMiddleware,
  availableCourseMiddleware
} from '../middlewares'

const router = express.Router()

router.get('/', authenticateMiddleware, adminMiddleware, allCourses)
router.get('/:id', authenticateMiddleware, adminMiddleware, getCourse)
router.post('/', authenticateMiddleware, adminMiddleware, createCourse)
router.put('/:id', authenticateMiddleware, adminMiddleware, updateCourse)
router.delete('/:id', authenticateMiddleware, adminMiddleware, deleteCourse)
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
  '/:id/weeks/:weekId',
  authenticateMiddleware,
  availableCourseMiddleware,
  getWeek
)
router.put(
  '/:id/weeks/:weekId',
  authenticateMiddleware,
  availableCourseMiddleware,
  updateWeek
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
