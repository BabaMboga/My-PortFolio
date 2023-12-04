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
        subject: subject,
        text: 'Name: ${name}\nEmail: ${email}\nMessage: ${message}',
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');

        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email Sent');
        }
    });
});

app.listen(port, () => {
    console.log('Server is running on port ${port}');
});
