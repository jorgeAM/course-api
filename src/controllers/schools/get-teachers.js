import { models } from '../../models'
import { roles } from '../../utils'

const getTeachers = async (req, res) => {
  const { id } = req.params

  const query = {
    where: {
      SchoolId: id
    },
    include: [
      {
        model: models.Role,
        required: true,
        where: {
          slug: roles.TEACHER
        }
      }
    ]
  }

  const teachers = await models.User.findAll(query)

  return res.json({ teachers })
}

export default getTeachers
