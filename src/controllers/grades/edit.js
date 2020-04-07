import { models } from '../../models'

const edit = async (req, res) => {
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

  const { name } = req.body

  const updatedGrade = await grade.update({ name })

  return res.json({ grade: updatedGrade })
}

export default edit
