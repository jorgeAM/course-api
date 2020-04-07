import bcrypt from 'bcrypt'
import express from 'express'
import { models } from '../../models'
import generateJWT from '../../utils/generate-jwt'

const router = express.Router()

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const userQuery = {
    where: {
      email
    }
  }

  const user = await models.User.findOne(userQuery)

  if (!user) {
    return res.status(404).json({ message: 'El usuario no existe' })
  }

  const match = bcrypt.compareSync(password, user.password)

  if (!match) {
    return res.status(400).json({ message: 'Las contraseña es incorrecta' })
  }

  res.status(200).json({
    user,
    token: generateJWT(user)
  })
})

export default router
