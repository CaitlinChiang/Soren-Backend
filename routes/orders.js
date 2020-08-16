const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Order
router.get('/add', (req, res) => {
    //add final price
    const { name, mobile, email, address, city, orderDate, paymentMethod, timestamp, orderStatus, paymentStatus } = req.query
    
    let sql      = 'INSERT INTO Orders SET ?'

    let category =  { 
                        customer_name:     name,
                        customer_mobile:   mobile,
                        customer_email:    email,
                        customer_address:  address,
                        city_id:           city,
                        order_date:        orderDate,
                        payment_id:        paymentMethod,
                        order_timestamp:   timestamp,
                        orderStatus_id:    orderStatus,
                        paymentStatus_id:  paymentStatus
                    }

    let query    = databaseData_getQuery(db, sql, category, res)
})


// View Order
router.get('/', (req, res) => {
    let sql   = `SELECT * FROM Orders
                 ORDER BY order_id DESC`

    let query = database_viewAction(db, sql, res)
})

router.get('/:id', (req, res) => {
    let sql   = `SELECT * FROM Orders
                 WHERE order_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Update Order
router.get('/update/:id', (req, res) => {
    const { orderStatus, paymentStatus } = req.query

    let sql   = `UPDATE Orders
                 SET    orderStatus_id = ${orderStatus},  paymentStatus_id = ${paymentStatus},  order_timestamp = order_timestamp
                 WHERE  order_id  = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Delete Order
router.get('/delete/:id', (req, res) => {
    let sql   = `DELETE FROM Orders 
                 WHERE order_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


module.exports = router