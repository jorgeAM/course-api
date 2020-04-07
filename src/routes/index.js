import express from 'express'
import auth from './auth'
import schools from './schools'
import courses from './courses'

const router = express.Router()

router.use('/auth', auth)
router.use('/schools', schools)
router.use('/courses', courses)

export default router
