import express from 'express'
import list from './list'
import create from './create'
import authenticateMiddleware from '../../middlewares/authenticate'
import adminMiddleware from '../../middlewares/admin'

const router = express.Router()

router.use(authenticateMiddleware)
router.use(adminMiddleware)

router.use('/courses', list)
router.use('/grades', create)

export default router
