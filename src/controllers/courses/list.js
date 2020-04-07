import { models } from '../../models'

const list = async (req, res) => {
  const { SchoolId } = req.user

  const query = {
    where: {
      SchoolId
    },
    include: [
      models.Grade,
      {
        model: models.User,
        as: 'Teacher'
      }
    ]
  }

  const courses = await models.Course.findAll(query)

  return res.json({ courses })
}

export default list
