import { Router } from "express";
import { configDotenv } from "dotenv";
import transporter from "./transporter.js";

configDotenv();
const routes = Router();

routes.post('/send', async (req, res) => {
    const { subject, email, message } = req.body

    const response = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: message,
    })
    res.json({ message: 'Email', info: response })
});

export default routes