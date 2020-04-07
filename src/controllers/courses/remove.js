import { models } from '../../models'

const remove = async (req, res) => {
  const { id } = req.params

  const course = await models.Course.findByPk(id)

  if (!course) {
    return res.status(404).json({ message: 'Curso no encontrado' })
  }

  await course.destroy()

  return res.json({ message: `El curso ${course.name} fue eliminado` })
}

export default remove
