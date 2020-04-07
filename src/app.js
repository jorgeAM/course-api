import cors from 'cors'
import express from 'express'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api', routes)

export default app
