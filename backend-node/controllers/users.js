const nodemailer = require('nodemailer');

exports.saveForm = (req, res, next) => {
    /**
     * form has passed all its validation, 
     * save the form to server
     * */
    console.log(req.body);
    res.status(200).json({
        message: "User Saved"
    });
    //asynchronously send email
    sendEmail()
        .then(info => console.log('Email sent - ' + info.response))
        .catch(err => console.log(err));
}

/**
 * it will only work if gmail config are set for allowing these apps to send mails
 */
function sendEmail() {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'abc@gmail.com',
            pass: '*****'
        }
    });

    var mailOptions = {
        from: 'abc@gmail.com',
        to: 'xyz@gmail.com',
        subject: 'Welcome to our application',
        text: 'Lets get started!'
    };

    return transporter.sendMail(mailOptions)
}

