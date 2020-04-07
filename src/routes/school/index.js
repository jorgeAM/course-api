import express from 'express'
import list from './list'
import remove from './remove'

const router = express.Router()

router.use('/schools', list)
router.use('/schools', remove)

export default router
