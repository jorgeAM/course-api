import { models } from '../../models'

const get = async (req, res) => {
  const { id, gradeId } = req.params

  const query = {
    where: {
      id: gradeId,
      SchoolId: id
    }
  }

  const grade = await models.Grade.findOne(query)

  return res.json({ grade })
}

export default get
