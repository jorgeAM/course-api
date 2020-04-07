import { models } from '../../models'

const edit = async (req, res) => {
  const { SchoolId } = req.user
  const { id } = req.params

  const query = {
    where: {
      id,
      SchoolId
    }
  }

  const course = await models.Course.findOne(query)

  if (!course) {
    return res.status(404).json({ message: 'Curso no encontrado' })
  }

  const { name, description, gradeId, teacherId } = req.body

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

  const payload = {
    name,
    description,
    GradeId: gradeId,
    TeacherId: teacherId
  }

  const updatedCourse = await course.update(payload)

  return res.json({ course: updatedCourse })
}

export default edit
