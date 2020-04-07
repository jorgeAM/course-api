import express from 'express'
import signUp from './sign-up'

const router = express.Router()

router.use('/auth', signUp)

export default router
