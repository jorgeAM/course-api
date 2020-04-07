import { roles } from '../utils/constants'

const adminMiddleware = async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Debes iniciar sesión' })
  }

  if (req.user.role == roles.SUPER_ADMIN) {
    next()
    return
  }

  if (req.user.role != roles.ADMIN) {
    return res.status(401).json({ message: 'No tienes un rol válido' })
  }

  next()
}

export default adminMiddleware
