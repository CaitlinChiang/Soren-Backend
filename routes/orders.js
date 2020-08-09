const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Order
router.get('/add', (req, res) => {
    let sql      = 'INSERT INTO Orders SET ?'

    let category =  { 
                        customer_name:    'Jeriel',
                        customer_mobile:  '09988629001',
                        customer_email:   'jerieltiu2012@gmail.com',
                        customer_address: '139 Kalaw St.',
                        city_id:          1,
                        order_date:       '2020-08-04',
                        payment_id:       1,
                        order_timestamp:  '2020-08-04 05:45:11',
                        status_id:        1
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
    let sql   = `UPDATE Orders
                 SET    status_id = 1
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