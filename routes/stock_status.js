const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Stock Status
router.get('/add', (req, res) => {
    let sql      = 'INSERT INTO Stock_Status SET ?'

    let category =  { 
                        stockStatus_label: 'Out of Stock'
                    }

    let query    = databaseData_getQuery(db, sql, category, res)
})


// View Stock Status
router.get('/', (req, res) => {
    let sql   = `SELECT * FROM Stock_Status`

    let query = database_viewAction(db, sql, res)
})

router.get('/:id', (req, res) => {
    let sql   = `SELECT * FROM Stock_Status
                 WHERE stockStatus_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Update Stock Status
router.get('/update/:id', (req, res) => {
    let sql   = `UPDATE Stock_Status
                 SET    stockStatus_label = 'BDO Fund Transfer'
                 WHERE  stockStatus_id    = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Delete Stock Status
router.get('/delete/:id', (req, res) => {
    let sql   = `DELETE FROM Stock_Status 
                 WHERE stockStatus_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


module.exports = router