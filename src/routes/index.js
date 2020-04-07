import express from 'express'
import auth from './auth'
import school from './school'

const router = express.Router()

router.use(auth)
router.use(school)

export default router
