import express from 'express'
import { models, sequelize } from '../../models'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const {
      name,
      identification: { type, value }
    } = req.body

    const schoolPayload = {
      name
    }

    const transaction = await sequelize.transaction()

    const school = await models.School.create(schoolPayload, { transaction })

    const idPayload = {
      type,
      value,
      identificableType: 'school',
      identificableId: school.id
    }

    await models.Identification.create(idPayload, { transaction })

    await transaction.commit()

    res.status(201).json({ school })
  } catch (error) {
    await transaction.rollback()

    res.status(500).json({
      message: 'No pudimos crear el colegio',
      error: error.message
    })
  }
})

export default router
