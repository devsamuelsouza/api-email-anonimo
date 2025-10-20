import express from 'express'
import bodyParser from 'body-parser'
import { configDotenv } from 'dotenv';
import cors from 'cors'
import routes from './routes.js'

configDotenv()

const port = 3333

const server = express()

const corsConfig = {
  origin: '*',
  methods: ['GET', 'POST',],
  allowedHeaders: ['Content-Type',],
}

server.use(cors(corsConfig))

server.use(express.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use(routes)

server.use(function (req, res) {
  res.status(404).json({
    status: 'error',
    error: 'not found',
  })
})

server.listen(port, () => console.log('Server is running on port 3333'))