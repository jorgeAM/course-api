import { models } from '../../models'

const create = async (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const payload = {
    name,
    SchoolId: id
  }

  try {
    const grade = await models.Grade.create(payload)

    return res.status(201).json({ grade })
  } catch (error) {
    return res.status(500).json({
      message: 'No pudimos crear el colegio',
      error: error.message
    })
  }
}

export default create
