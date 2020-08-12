const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Order
router.get('/add', (req, res) => {
    let sql      = 'INSERT INTO Orders SET ?'

    let category =  { 
                        customer_name:     'Hannah',
                        customer_mobile:   '09988629001',
                        customer_email:    'jerieltiu2012@gmail.com',
                        customer_address:  'In a Rich Place',
                        city_id:           7,
                        order_date:        '2020-08-04',
                        payment_id:        2,
                        order_timestamp:   '2020-08-04 05:45:11',
                        orderStatus_id:    1,
                        paymentStatus_id:  2
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
                 SET    orderStatus_id = ${orderStatus},  paymentStatus_id = ${paymentStatus}, order_timestamp = order_timestamp
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