import { models } from '../../models'

const list = async (req, res) => {
  const { id } = req.params

  const query = {
    where: {
      CourseId: id
    }
  }

  try {
    const weeks = await models.Week.findAll(query)

    return res.json({ weeks })
  } catch (error) {
    return res.status(500).json({
      message: `No pudimos agregar semana para ${course.name}`,
      error: error.message
    })
  }
}
export default list
