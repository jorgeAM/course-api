import { models } from '../../models'

const edit = async (req, res) => {
  const { weekId, tabId } = req.params

  const query = {
    where: {
      id: tabId,
      WeekId: weekId
    }
  }

  const tab = await models.Tab.findOne(query)

  if (!tab) {
    return res.status(404).json({ message: 'Tab no encontrado' })
  }

  const { name } = req.body

  const updatedTab = await tab.update({ name })

  return res.json({ tab: updatedTab })
}

export default edit
