import { Router } from "express";
import { configDotenv } from "dotenv";
import transporter from "./transporter.js";

configDotenv();
const routes = Router();

routes.post('/send/anonymous/email', async (req, res) => {
    const { subject, email, message } = req.body

    transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: message,
    }).then(() => {
        res.status(200).send({
            status: 'ok',
        })
    }).catch((error) => {
        res.status(500).send({
            status: 'error',
            error: error,
        })
        res.status(500).send(error)
    })
});

export default routes