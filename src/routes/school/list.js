import express from 'express'
import { models } from '../../models'
import authenticateMiddleware from '../../middlewares/authenticate'
import superAdminMiddleware from '../../middlewares/super-admin'

const router = express.Router()

router.use(authenticateMiddleware)
router.use(superAdminMiddleware)

router.get('/', async (req, res) => {
  const schools = await models.School.findAll()
  res.json({ schools })
})

export default router
