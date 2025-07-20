import nodemailer from 'nodemailer'
import { configDotenv } from 'dotenv';

configDotenv()
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
export default transporter 