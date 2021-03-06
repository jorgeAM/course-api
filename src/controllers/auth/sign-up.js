import bcrypt from 'bcrypt'
import moment from 'moment'
import { models, sequelize } from '../../models'
import { generateJWT, roles } from '../../utils'

const signUp = async (req, res) => {
  const {
    firstName,
    lastName,
    gender,
    birthday,
    email,
    password,
    confirmPassword,
    identification
  } = req.body

  const userQuery = {
    where: {
      email
    }
  }

  const user = await models.User.findOne(userQuery)

  if (user) {
    return res
      .status(400)
      .json({ message: 'Ya hay un usuario con este correo' })
  }

  const roleQuery = {
    where: {
      slug: roles.TEACHER
    }
  }

  const role = await models.Role.findOne(roleQuery)

  if (!role) {
    return res
      .status(500)
      .json({ message: `admin needs to create a teacher role` })
  }

  if (password != confirmPassword) {
    return res.status(400).json({ message: 'Las contraseñas no coinciden' })
  }

  const payload = {
    firstName,
    lastName,
    gender,
    email,
    RoleId: role.id,
    SchoolId: req.school.id
  }
  payload.password = bcrypt.hashSync(password, 10)
  payload.birthday = moment(birthday).toDate()

  const transaction = await sequelize.transaction()

  try {
    const newUser = await models.User.create(payload, { transaction })

    const { type, value } = identification

    const idPayload = {
      type,
      value,
      identificableType: 'user',
      identificableId: newUser.id
    }

    await models.Identification.create(idPayload, { transaction })

    await transaction.commit()

    const token = await generateJWT(newUser)

    return res.status(201).json({
      user: newUser,
      token
    })
  } catch (error) {
    await transaction.rollback()

    res.status(500).json({
      message: 'No pudimos crear tu cuenta, intentalo otra vez',
      error: error.message
    })
  }
}

export default signUp
