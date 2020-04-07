import { models } from '../models'

const availableCourseMiddleware = async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Debes iniciar sesión' })
  }

  const { id } = req.params

  const course = await models.Course.findByPk(id)

  if (!course) {
    return res.status(400).json({ message: 'Este curso no existe' })
  }

  if (course.TeacherId != req.user.id) {
    return res.status(401).json({ message: 'No tienes acceso a este curso' })
  }

  next()
}

export default availableCourseMiddleware
