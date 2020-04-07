import { models } from '../../models'

const edit = async (req, res) => {
  const { id, weekId } = req.params

  const query = {
    where: {
      id: weekId,
      CourseId: id
    }
  }

  const week = await models.Week.findOne(query)

  if (!week) {
    return res.status(404).json({ message: 'Semana no encontrado' })
  }

  await week.destroy()

  return res.json({ message: `${week.name} fue eliminado` })
}

export default edit
