import express from 'express'
import {
  createWeek,
  allWeeks,
  getWeek,
  updateWeek,
  deleteWeek
} from '../controllers/weeks'
import {
  allTabs,
  createTab,
  getTab,
  deleteTab,
  updateTab
} from '../controllers/tabs'
import {
  allAttributes,
  createAttributes,
  getAttribute,
  deleteAttribute
} from '../controllers/attributes'
import {
  allCourses,
  createCourse,
  getCourse,
  deleteCourse,
  updateCourse,
  uploadBanner
} from '../controllers/courses'
import {
  adminMiddleware,
  authenticateMiddleware,
  availableCourseMiddleware
} from '../middlewares'
import { multerConfig } from '../utils'

const router = express.Router()

router.get('/', authenticateMiddleware, adminMiddleware, allCourses)
router.get('/:id', authenticateMiddleware, adminMiddleware, getCourse)
router.post('/', authenticateMiddleware, adminMiddleware, createCourse)
router.put('/:id', authenticateMiddleware, adminMiddleware, updateCourse)
router.delete('/:id', authenticateMiddleware, adminMiddleware, deleteCourse)
router.post(
  '/:id/upload-banner',
  authenticateMiddleware,
  adminMiddleware,
  multerConfig.single('banner'),
  uploadBanner
)

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
router.delete(
  '/:id/weeks/:weekId',
  authenticateMiddleware,
  availableCourseMiddleware,
  deleteWeek
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
  '/:id/weeks/:weekId/tabs/:tabId',
  authenticateMiddleware,
  availableCourseMiddleware,
  getTab
)
router.put(
  '/:id/weeks/:weekId/tabs/:tabId',
  authenticateMiddleware,
  availableCourseMiddleware,
  updateTab
)
router.delete(
  '/:id/weeks/:weekId/tabs/:tabId',
  authenticateMiddleware,
  availableCourseMiddleware,
  deleteTab
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
router.get(
  '/:id/weeks/:weekId/tabs/:tabId/attributes/:attributeId',
  authenticateMiddleware,
  availableCourseMiddleware,
  getAttribute
)
router.delete(
  '/:id/weeks/:weekId/tabs/:tabId/attributes/:attributeId',
  authenticateMiddleware,
  availableCourseMiddleware,
  deleteAttribute
)

export default router
