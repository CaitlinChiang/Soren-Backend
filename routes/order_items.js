const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Order Item
router.get('/add', (req, res) => {
    const { orderID, productID, color, size } = req.query

    let sql      = 'INSERT INTO Order_Items SET ?'

    let category =  { 
                        order_id:      orderID,
                        product_id:    productID,
                        product_color: color,
                        product_size:  size
                    }

    let query    = databaseData_getQuery(db, sql, category, res)
})


// View Order Items
router.get('/', (req, res) => {
    let sql   = `SELECT * FROM Order_Items
                 ORDER BY order_id DESC`

    let query = database_viewAction(db, sql, res)
})

router.get('/:id', (req, res) => {
    let sql   = `SELECT * FROM Order_Items
                 WHERE order_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Update Order Item
router.get('/update/:id', (req, res) => {
    const { orderStatus, paymentStatus } = req.query

    let sql   = `UPDATE Orders
                 SET    orderStatus_id = ${orderStatus},  paymentStatus_id = ${paymentStatus},  order_timestamp = order_timestamp
                 WHERE  order_id  = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Delete Order Item
router.get('/delete/:id', (req, res) => {
    let sql   = `DELETE FROM Order_Items 
                 WHERE order_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


module.exports = router