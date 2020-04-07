import { models } from '../models'
import { roles } from '../utils'

const availableCourseMiddleware = async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Debes iniciar sesión' })
  }

  if (req.user.role == roles.SUPER_ADMIN) {
    next()
    return
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
