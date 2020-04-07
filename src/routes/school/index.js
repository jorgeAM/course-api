import express from 'express'
import list from './list'
import create from './create'
import remove from './remove'
import authenticateMiddleware from '../../middlewares/authenticate'
import superAdminMiddleware from '../../middlewares/super-admin'

const router = express.Router()

router.use(authenticateMiddleware)
router.use(superAdminMiddleware)

router.use('/schools', list)
router.use('/schools', remove)
router.use('/schools', create)

export default router
