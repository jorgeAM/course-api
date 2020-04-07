import express from 'express'
import auth from './auth'
import school from './school'
import grade from './grade'

const router = express.Router()

router.use(auth)
router.use(school)
router.use(grade)

export default router
