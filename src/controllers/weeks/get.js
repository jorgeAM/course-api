import { models } from '../../models'

const get = async (req, res) => {
  const { id, weekId } = req.params

  const query = {
    where: {
      id: weekId,
      CourseId: id
    }
  }

  const week = await models.Week.findOne(query)

  return res.json({ week })
}

export default get
