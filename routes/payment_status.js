const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Payment Status
router.get('/add', (req, res) => {
    let sql      = 'INSERT INTO Payment_Status SET ?'

    let category =  { 
                        paymentStatus_label: 'Ready'
                    }

    let query    = databaseData_getQuery(db, sql, category, res)
})


// View Payment Status
router.get('/', (req, res) => {
    let sql   = `SELECT * FROM Payment_Status`

    let query = database_viewAction(db, sql, res)
})

router.get('/:id', (req, res) => {
    let sql   = `SELECT * FROM Payment_Status
                 WHERE paymentStatus_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Update Payment Status
router.get('/update/:id', (req, res) => {
    let sql   = `UPDATE Payment_Status
                 SET    paymentStatus_label = 'Remove'
                 WHERE  paymentStatus_id    = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Delete Payment Status
router.get('/delete/:id', (req, res) => {
    let sql   = `DELETE FROM Payment_Status 
                 WHERE paymentStatus_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


module.exports = router