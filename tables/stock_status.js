const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Stock Status Table
router.get('/add', (req, res) => {
    let sql = `CREATE TABLE Stock_Status( 
                                stockStatus_id     INT          AUTO_INCREMENT,
                                stockStatus_label  VARCHAR(15)  NOT NULL,

                                PRIMARY KEY(stockStatus_id)
                            )`

    database_viewAction(db, sql, res)
})


// View Stock Status Table Column Headers
router.get('/', (req, res) => {
    let sql = 'DESCRIBE Stock_Status'

    database_viewAction(db, sql, res)
})


// Update Stock Status Columns
router.get('/addColumn', (req, res) => {
    let sql = `ALTER TABLE Stock_Status 
               ADD COLUMN image VARCHAR(10) NOT NULL`

    database_viewAction(db, sql, res)
})

router.get('/deleteColumn', (req, res) => {
    let sql = `ALTER TABLE Stock_Status 
               DROP COLUMN image`

    database_viewAction(db, sql, res)
})


// Delete Stock Status Table
router.get('/delete', (req, res) => {
    let sql = 'DROP TABLE Stock_Status'

    database_viewAction(db, sql, res)
})


module.exports = router