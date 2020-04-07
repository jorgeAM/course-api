import bcrypt from 'bcrypt'
import { models } from '../../models'
import { generateJWT } from '../../utils'

const login = async (req, res) => {
  const { email, password } = req.body

  const userQuery = {
    where: {
      email
    },
    include: [models.Role]
  }

  const user = await models.User.findOne(userQuery)

  if (!user) {
    return res.status(404).json({ message: 'El usuario no existe' })
  }

  const match = bcrypt.compareSync(password, user.password)

  if (!match) {
    return res.status(400).json({ message: 'Las contraseña es incorrecta' })
  }

  const token = await generateJWT(user)

  res.status(200).json({
    user,
    token
  })
}

export default login
