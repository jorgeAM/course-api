import { models } from '../../models'

const list = async (req, res) => {
  const { id } = req.params

  const query = {
    where: {
      SchoolId: id
    }
  }

  const grades = await models.Grade.findAll(query)

  return res.json({ grades })
}

export default list
