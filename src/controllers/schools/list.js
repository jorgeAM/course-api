import { models } from '../../models'

const list = async (req, res) => {
  const schools = await models.School.findAll()

  return res.json({ schools })
}

export default list
