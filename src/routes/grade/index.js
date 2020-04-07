import express from 'express'
import list from './list'
import create from './create'
import authenticateMiddleware from '../../middlewares/authenticate'
import superAdminMiddleware from '../../middlewares/super-admin'

const router = express.Router()

router.use(authenticateMiddleware)
router.use(superAdminMiddleware)

router.use('/grades', list)
router.use('/grades', create)

export default router
