import { models } from '../models'

const schoolMiddleware = async (req, res, next) => {
  if (!req.headers.school) {
    return res.status(400).json({ message: 'Falta la cabecera school' })
  }

  const query = {
    where: {
      slug: req.headers.school
    }
  }

  const school = await models.School.findOne(query)

  if (!school) {
    return res.status(400).json({ message: 'La cabecera es incorrecta' })
  }

  req.school = school
  next()
}

export default schoolMiddleware
