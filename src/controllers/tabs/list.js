import { models } from '../../models'

const list = async (req, res) => {
  const { weekId } = req.params

  const query = {
    where: {
      WeekId: weekId
    }
  }

  const tabs = await models.Tab.findAll(query)

  return res.json({ tabs })
}

export default list
