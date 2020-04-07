import express from 'express'
import { models } from '../../models'
import authenticateMiddleware from '../../middlewares/authenticate'
import superAdminMiddleware from '../../middlewares/super-admin'

const router = express.Router()

router.use(authenticateMiddleware)
router.use(superAdminMiddleware)

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
