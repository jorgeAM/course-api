import { models } from '../../models'

const get = async (req, res) => {
  const { id } = req.params

  const query = {
    where: {
      id
    },
    include: [
      models.Grade,
      models.School,
      models.Week,
      {
        model: models.User,
        as: 'Teacher'
      }
    ]
  }

  const course = await models.Course.findOne(query)

  return res.json({ course })
}

export default get
