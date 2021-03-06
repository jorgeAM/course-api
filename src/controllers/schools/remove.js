import { models } from '../../models'

const remove = async (req, res) => {
  const { id } = req.params
  const school = await models.School.findByPk(id)

  if (!school) {
    return res.status(404).json({ message: 'Colegio no encontrado' })
  }

  await school.destroy()

  return res.status(200).json({
    message: `El colegio ${school.name} fue eliminado`
  })
}

export default remove
