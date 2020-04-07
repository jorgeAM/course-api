import { models } from '../../models'

const list = async (req, res) => {
  const { tabId } = req.params

  const query = {
    where: {
      TabId: tabId
    }
  }

  const attributes = await models.Attribute.findAll(query)

  return res.json({ attributes })
}

export default list
