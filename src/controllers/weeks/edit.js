import moment from 'moment'
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

  const { name, startDate, endDate } = req.body

  const payload = {
    name,
    startDate: moment(startDate).toDate(),
    endDate: moment(endDate).toDate()
  }

  const updatedWeek = await week.update(payload)

  return res.json({ week: updatedWeek })
}

export default edit
