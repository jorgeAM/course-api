import { models } from '../../models'

const get = async (req, res) => {
  console.log('GG')
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
