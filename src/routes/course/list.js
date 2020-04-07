import express from 'express'
import { models } from '../../models'

const router = express.Router()

router.get('/', async (req, res) => {
  const courses = await models.Course.findAll()
  res.json({ courses })
})

export default router
