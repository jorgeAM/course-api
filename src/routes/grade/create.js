import express from 'express'
import { models } from '../../models'

const router = express.Router()

router.post('/', async (req, res) => {
  const { name, schoolId } = req.body

  const payload = {
    name,
    SchoolId: schoolId
  }

  try {
    const grade = await models.Grade.create(payload)

    return res.status(201).json({ grade })
  } catch (error) {
    return res.status(500).json({
      message: 'No pudimos crear el colegio',
      error: error.message
    })
  }
})

export default router
