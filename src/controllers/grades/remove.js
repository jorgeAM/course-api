import { models } from '../../models'

const remove = async (req, res) => {
  const { id, gradeId } = req.params

  const query = {
    where: {
      id: gradeId,
      SchoolId: id
    }
  }

  const grade = await models.Grade.findOne(query)

  if (!grade) {
    return res.status(404).json({ message: 'Grado no encontrado' })
  }

  await grade.destroy()

  return res.json({ message: `El grado ${grade.name} fue eliminado` })
}

export default remove
