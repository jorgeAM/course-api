import { models } from '../../models'

const get = async (req, res) => {
  const { id } = req.params

  const query = {
    where: {
      id
    },
    include: [models.Identification]
  }

  const school = await models.School.findOne(query)

  return res.json({ school })
}

export default get
