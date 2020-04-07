import { models } from '../../models'

const create = async (req, res) => {
  const { SchoolId } = req.user
  const { name, description, gradeId, teacherId } = req.body

  const payload = {
    name,
    description,
    SchoolId,
    GradeId: gradeId,
    TeacherId: teacherId
  }

  const errors = []

  const gradeQuery = {
    where: {
      id: gradeId,
      SchoolId
    }
  }

  const grade = await models.Grade.findOne(gradeQuery)

  if (!grade) {
    errors.push({
      key: 'grade',
      message: 'El grado elegido no existe'
    })
  }

  const teacherQuery = {
    where: {
      id: teacherId,
      SchoolId
    }
  }

  const teacher = await models.User.findOne(teacherQuery)

  if (!teacher) {
    errors.push({
      key: 'teacher',
      message: 'El docente elegido no existe'
    })
  }

  if (errors.length > 0) {
    return res.status(400).json({
      message: 'No pudimos crear el curso',
      errors
    })
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
}

export default create
