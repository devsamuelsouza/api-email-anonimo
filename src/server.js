import express from 'express'
import bodyParser from 'body-parser'
import nodemailer from 'nodemailer'
import { configDotenv } from 'dotenv';
import cors from 'cors'
import routes from './routes.js'

configDotenv()
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
export { transporter }

const port = 3333

const server = express()
server.use(express.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cors({
  origin: '*',
  methods: ['POST']
}))

server.use(routes)
server.use(function (req, res) {
  res.status(404).redirect({
    status: 'error',
    error: 'not found',
  })
})

server.listen(port,
  () => console.log('Server is running'))