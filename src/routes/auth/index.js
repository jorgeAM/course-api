import express from 'express'
import signUp from './sign-up'
import login from './login'

const router = express.Router()

router.use('/auth', signUp)
router.use('/auth', login)

export default router
