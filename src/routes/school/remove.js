import express from 'express'
import { models } from '../../models'

const router = express.Router()

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const school = await models.School.findByPk(id)

  if (!school) {
    return res.status(404).json({ message: 'Colegio no encontrado' })
  }

  await school.destroy()

  res.status(200).json({ message: `El colegio ${school.name} fue eliminado` })
})

export default router
