import express from 'express'
import list from './list'

const router = express.Router()

router.use('/schools', list)

export default router
