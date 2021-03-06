import { roles } from '../utils/constants'

const superAdminMiddleware = async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Debes iniciar sesión' })
  }

  if (req.user.role != roles.SUPER_ADMIN) {
    return res.status(401).json({ message: 'No tienes un rol válido' })
  }

  next()
}

export default superAdminMiddleware
