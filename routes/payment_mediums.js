const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Payment Medium
router.get('/add', (req, res) => {
    let sql      = 'INSERT INTO Payment_Mediums SET ?'

    let category =  { 
                        payment_method: 'GCash'
                    }

    let query    = databaseData_getQuery(db, sql, category, res)
})


// View Payment Medium
router.get('/', (req, res) => {
    let sql   = `SELECT * FROM Payment_Mediums`

    let query = database_viewAction(db, sql, res)
})

router.get('/:id', (req, res) => {
    let sql   = `SELECT * FROM Payment_Mediums
                 WHERE payment_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Update Payment Medium
router.get('/update/:id', (req, res) => {
    let sql   = `UPDATE Payment_Mediums
                 SET    payment_method = 'BDO Fund Transfer'
                 WHERE  payment_id     = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Delete Payment Medium
router.get('/delete/:id', (req, res) => {
    let sql   = `DELETE FROM Payment_Mediums 
                 WHERE payment_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


module.exports = router