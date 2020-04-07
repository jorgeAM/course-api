import express from 'express'
import { models } from '../../models'

const router = express.Router()

router.get('/', async (req, res) => {
  res.json({ message: 'coles' })
})

export default router
