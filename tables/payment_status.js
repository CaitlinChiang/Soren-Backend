const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Payment Status Table
router.get('/add', (req, res) => {
    let sql = `CREATE TABLE Payment_Status( 
                                paymentStatus_id     INT          AUTO_INCREMENT,
                                paymentStatus_label  VARCHAR(10)  NOT NULL,

                                PRIMARY KEY(paymentStatus_id)
                            )`

    database_viewAction(db, sql, res)
})


// View Payment Status Table Column Headers
router.get('/', (req, res) => {
    let sql = 'DESCRIBE Payment_Status'

    database_viewAction(db, sql, res)
})


// Update Payment Status Columns
router.get('/addColumn', (req, res) => {
    let sql = `ALTER TABLE Payment_Status 
               ADD COLUMN image VARCHAR(10) NOT NULL`

    database_viewAction(db, sql, res)
})

router.get('/deleteColumn', (req, res) => {
    let sql = `ALTER TABLE Payment_Status 
               DROP COLUMN image`

    database_viewAction(db, sql, res)
})


// Delete Payment Status Table
router.get('/delete', (req, res) => {
    let sql = 'DROP TABLE Payment_Status'

    database_viewAction(db, sql, res)
})


module.exports = router