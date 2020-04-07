import express from 'express'
import { models } from '../../models'

const router = express.Router()

router.get('/', async (req, res) => {
  const schools = await models.School.findAll()
  res.json({ schools })
})

export default router
