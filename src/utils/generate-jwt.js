import jwt from 'jsonwebtoken'

const KEY = process.env.JWT_SECRET

const generateJWT = async user => {
  const data = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    gender: user.gender,
    email: user.email,
    RoleId: user.RoleId,
    role: user.Role.slug || (await user.getRole()).slug
  }

  return jwt.sign(data, KEY, { expiresIn: '8h' })
}

export default generateJWT
