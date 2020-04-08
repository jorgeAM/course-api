import cors from 'cors'
import path from 'path'
import express from 'express'
import routes from './routes'

const app = express()

const publicFolder = path.resolve(__dirname, '../public')

app.use(express.static(publicFolder))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api', routes)

export default app
