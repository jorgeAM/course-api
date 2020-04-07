import { models } from '../../models'

const remove = async (req, res) => {
  const { attributeId, tabId } = req.params

  const query = {
    where: {
      id: attributeId,
      TabId: tabId
    }
  }

  const attribute = await models.Attribute.findOne(query)

  if (!attribute) {
    return res.status(404).json({ message: 'Atributo no encontrado' })
  }

  await attribute.destroy()

  return res.json({ message: 'Atributo eliminado' })
}

export default remove
