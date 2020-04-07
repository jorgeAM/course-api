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

  if (!tab) {
    return res.status(404).json({ message: 'Tab no encontrado' })
  }

  await tab.destroy()

  return res.json({ message: 'Tab eliminado' })
}

export default get
