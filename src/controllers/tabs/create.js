import { models } from '../../models'

const create = async (req, res) => {
  const { weekId } = req.params
  const { name } = req.body

  const payload = {
    name,
    WeekId: weekId
  }

  try {
    const tab = await models.Tab.create(payload)

    return res.status(201).json({ tab })
  } catch (error) {
    return res.status(500).json({
      message: 'No pudimos crear el Tab',
      error: error.message
    })
  }
}

export default create
