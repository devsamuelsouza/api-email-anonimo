import { Router } from "express";
import { configDotenv } from "dotenv";
import { transporter } from "./server.js";

configDotenv()
const routes = Router();

routes.post('/send/anonymous/email', async (req, res) => {
    const { subject, email, message } = req.body

    transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: message,
    }).then(() => {
        res.status(201).send({
            status: 'ok',
        })
    }).catch((error) => {
        res.status(500).send({
            status: 'error',
            error: error,
        })
    })
})

export default routes