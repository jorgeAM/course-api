import express from 'express'
import { models } from '../../models'

const router = express.Router()

router.get('/', async (req, res) => {
  const grades = await models.Grade.findAll()
  res.json({ grades })
})

export default router
