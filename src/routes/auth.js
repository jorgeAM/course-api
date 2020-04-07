import express from 'express'
import { login, signUp } from '../controllers/auth'
import { schoolMiddleware } from '../middlewares'

const router = express.Router()

router.post('/sign-up', schoolMiddleware, signUp)
router.post('/login', login)

export default router
