const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const {name, email, subject, message } = req.body;

    // create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // Define email options
    const mailOptions = {
        from: 'your-email@gmail.com', // sender address
        to: 'odhisayim@gmail.com', // recipient address
    }
})
