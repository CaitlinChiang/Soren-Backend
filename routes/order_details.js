const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()

// Create Order Detail
router.get('/add', (req, res) => {
    const { name, mobile, email, address, city, orderDate, price, paymentMethod, timestamp } = req.query
    
    let sql = 'INSERT INTO order_details SET ?'

    let category =  { 
                        timestamp: timestamp,
                        customer_name: name,
                        customer_mobile: mobile,
                        customer_email: email,
                        customer_address: address,
                        city_id: city,
                        paymentMethod_id: paymentMethod,
                        delivery_date: orderDate,
                        price: price,
                        orderStatus_id: 1,
                        paymentStatus_id: 1
                    }

    let query = databaseData_getQuery(db, sql, category, res)
})

// View Order Detail
router.get('/', (req, res) => {
    let sql = `SELECT * FROM order_details
                 ORDER BY orderDetail_id DESC`

    let query = database_viewAction(db, sql, res)
})

// Update Order Detail
router.get('/update/:id', (req, res) => {
    const { orderStatus, paymentStatus } = req.query

    let sql = `UPDATE order_details

                SET orderStatus_id = ${orderStatus},
                    paymentStatus_id = ${paymentStatus},
                    timestamp = timestamp
                 
                WHERE orderDetail_id  = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})

// Delete Order Detail
router.get('/delete/:id', (req, res) => {
    let sql   = `DELETE FROM order_details 
                 WHERE orderDetail_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})

module.exports = router