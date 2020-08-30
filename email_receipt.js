const router = require("express").Router()
const nodemailer = require('nodemailer')

router.get('/', (req, res) => {
    const { email, orderID, name, price, address, city, paymentMethod, date, order_items } = req.query

    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sorenphilippines@gmail.com',
            pass: 'Soren2020'
        }
    })

    let order_receipt = {
        from: 'sorenphilippines@gmail.com',
        to: email,
        subject: 'Soren: Order Receipt',
        html: `
        <h2>ORDER DETAILS:</h2>
        <table style="border: 1px solid #000; font-size: 15px; text-align: center;">
            <tr>
                <td style="padding: 10px 200px; border: 1px solid #000">Order Number</td>
                <td style="padding: 10px 200px; border: 1px solid #000">${orderID}</td>
            </tr>
            <tr>
                <td style="padding: 10px 200px; border: 1px solid #000">Total Price</td>
                <td style="padding: 10px 200px; border: 1px solid #000">P${price}.00</td>
            </tr>
            <tr>
                <td style="padding: 10px 200px; border: 1px solid #000">Name</td>
                <td style="padding: 10px 200px; border: 1px solid #000">${name}</td>
            </tr>
            <tr>
                <td style="padding: 10px 200px; border: 1px solid #000">Address</td>
                <td style="padding: 10px 200px; border: 1px solid #000">${address}, ${city}</td>
            </tr>
            <tr>
                <td style="padding: 10px 200px; border: 1px solid #000">Payment Method</td>
                <td style="padding: 10px 200px; border: 1px solid #000">${paymentMethod}</td>
            </tr>
            <tr>
                <td style="padding: 10px 200px; border: 1px solid #000">Delivery Date</td>
                <td style="padding: 10px 200px; border: 1px solid #000">${date}</td>
            </tr>
        </table>

        <br/><p>Note: For any inquiries, kindly reply back to this message. Thank you!</p>
        `
    }
    
    mailTransporter.sendMail(order_receipt, (error, info) => {
        if (error) console.log(error);
        else console.log('Email sent: ' + info.response)
    })
})

module.exports = router