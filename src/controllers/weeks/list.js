import { models } from '../../models'

const list = async (req, res) => {
  const { id } = req.params

  const query = {
    where: {
      CourseId: id
    }
  }

  const weeks = await models.Week.findAll(query)

  return res.json({ weeks })
}
export default list
