import { models } from '../../models'

const create = async (req, res) => {
  const { tabId } = req.params
  const { typeItem, title, resume, value } = req.body

  const payload = {
    typeItem,
    title,
    resume,
    value,
    TabId: tabId
  }

  try {
    const attribute = await models.Attribute.create(payload)

    return res.status(201).json({ attribute })
  } catch (error) {
    return res.status(500).json({
      message: 'No pudimos crear el atributo',
      error: error.message
    })
  }
}

export default create
