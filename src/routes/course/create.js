import express from 'express'
import { models } from '../../models'

const router = express.Router()

router.post('/', async (req, res) => {
  const { name, description, schoolId, gradeId, teacherId } = req.body

  const payload = {
    name,
    description,
    GradeId: gradeId,
    SchoolId: schoolId,
    TeacherId: teacherId
  }

  const school = await models.School.findByPk(schoolId)

  if (!school) {
    return res.status(400).json({ message: 'El colegio elegido no existe' })
  }

  const grade = await models.Grade.findByPk(gradeId)

  if (!grade) {
    return res.status(400).json({ message: 'El grado elegido no existe' })
  }

  const teacher = await models.User.findByPk(teacherId)

  if (!teacher) {
    return res.status(400).json({ message: 'El docente elegido no existe' })
  }

  try {
    const course = await models.Course.create(payload)

    return res.status(201).json({ course })
  } catch (error) {
    return res.status(500).json({
      message: 'No pudimos crear el curso',
      error: error.message
    })
  }
})

export default router
