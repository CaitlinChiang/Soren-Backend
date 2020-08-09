const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Order Status
router.get('/add', (req, res) => {
    let sql      = 'INSERT INTO Order_Status SET ?'

    let category =  { 
                        orderStatus_label: 'Issues'
                    }

    let query    = databaseData_getQuery(db, sql, category, res)
})


// View Order Status
router.get('/', (req, res) => {
    let sql   = `SELECT * FROM Order_Status`

    let query = database_viewAction(db, sql, res)
})

router.get('/:id', (req, res) => {
    let sql   = `SELECT * FROM Order_Status
                 WHERE orderStatus_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Update Order Status
router.get('/update/:id', (req, res) => {
    let sql   = `UPDATE Order_Status
                 SET    orderStatus_label = 'Remove'
                 WHERE  orderStatus_id    = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Delete Order Status
router.get('/delete/:id', (req, res) => {
    let sql   = `DELETE FROM Order_Status 
                 WHERE orderStatus_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


module.exports = router