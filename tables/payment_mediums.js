const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Payment Mediums Table
router.get('/add', (req, res) => {
    let sql = `CREATE TABLE Payment_Mediums( 
                                payment_id      INT          AUTO_INCREMENT,
                                payment_method  VARCHAR(20)  NOT NULL,

                                PRIMARY KEY(payment_id)
                            )`

    database_viewAction(db, sql, res)
})


// View Payment Mediums Table Column Headers
router.get('/', (req, res) => {
    let sql = 'DESCRIBE Payment_Mediums'

    database_viewAction(db, sql, res)
})


// Update Payment Mediums Columns
router.get('/addColumn', (req, res) => {
    let sql = `ALTER TABLE Payment_Mediums 
               ADD COLUMN image VARCHAR(10) NOT NULL`

    database_viewAction(db, sql, res)
})

router.get('/deleteColumn', (req, res) => {
    let sql = `ALTER TABLE Payment_Mediums 
               DROP COLUMN image`

    database_viewAction(db, sql, res)
})


// Delete Payment Mediums Table
router.get('/delete', (req, res) => {
    let sql = 'DROP TABLE Payment_Mediums'

    database_viewAction(db, sql, res)
})


module.exports = router