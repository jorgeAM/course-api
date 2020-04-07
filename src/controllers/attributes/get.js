import { models } from '../../models'

const get = async (req, res) => {
  const { attributeId, tabId } = req.params

  const query = {
    where: {
      id: attributeId,
      TabId: tabId
    }
  }

  const attribute = await models.Attribute.findOne(query)

  return res.json({ attribute })
}

export default get
