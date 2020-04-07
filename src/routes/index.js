import express from 'express'
import auth from './auth'
import school from './school'
import grade from './grade'
import course from './course'

const router = express.Router()

router.use(auth)
router.use(school)
router.use(grade)
router.use(course)

export default router
