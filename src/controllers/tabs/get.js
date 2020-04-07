import { models } from '../../models'

const get = async (req, res) => {
  const { weekId, tabId } = req.params

  const query = {
    where: {
      id: tabId,
      WeekId: weekId
    }
  }

  const tab = await models.Tab.findOne(query)

  return res.json({ tab })
}

export default get
