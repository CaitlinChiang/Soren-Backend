const nodemailer = require('nodemailer')

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sorenphilippines@gmail.com',
        pass: ''
    }
})

let order_receipt = {
    from: 'sorenphilippines@gmail.com',
    to: 'chiangcaitlin2003@gmail.com',
    subject: 'Soren: Order Receipt',
    text: 'This is your order receipt. *Insert Order Details Later*'
}

mailTransporter.sendMail(order_receipt, (error, info) => {
    if (error) console.log(error);
    else console.log('Email sent: ' + info.response);
});