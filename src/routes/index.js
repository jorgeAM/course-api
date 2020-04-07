import express from 'express'
import auth from './auth'
import school from './school'

const router = express.Router()

router.use('/auth', auth)
router.use('/schools', school)

export default router
