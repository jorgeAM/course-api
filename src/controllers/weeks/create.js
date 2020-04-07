import moment from 'moment'
import { models } from '../../models'

const create = async (req, res) => {
  const { id } = req.params
  const { name, startDate, endDate } = req.body

  const payload = {
    name,
    startDate: moment(startDate).toDate(),
    endDate: moment(endDate).toDate(),
    CourseId: id
  }

  try {
    const week = await models.Week.create(payload)

    return res.status(201).json({ week })
  } catch (error) {
    return res.status(500).json({
      message: `No pudimos agregar semana para ${course.name}`,
      error: error.message
    })
  }
}

export default create
