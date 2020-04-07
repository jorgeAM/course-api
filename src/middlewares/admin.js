import { models } from '../models'
import { roles } from '../utils/constants'

const adminMiddleware = async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Debes iniciar sesión' })
  }

  const role = await models.Role.findByPk(req.user.RoleId)

  if (!role) {
    return res.status(401).json({ message: 'No tienes un rol válido' })
  }

  if (role.slug != roles.ADMIN) {
    return res.status(401).json({ message: 'No tienes un rol válido' })
  }

  next()
}

export default adminMiddleware
