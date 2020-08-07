const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Order Status Table
router.get('/add', (req, res) => {
    let sql = `CREATE TABLE Order_Status( 
                                status_id     INT          AUTO_INCREMENT,
                                status_label  VARCHAR(10)  NOT NULL,

                                PRIMARY KEY(status_id)
                            )`

    database_viewAction(db, sql, res)
})


// View Order Status Table Column Headers
router.get('/', (req, res) => {
    let sql = 'DESCRIBE Order_Status'

    database_viewAction(db, sql, res)
})


// Update Order Status Columns
app.get('/addColumn', (req, res) => {
    let sql = `ALTER TABLE Order_Status 
               ADD COLUMN image VARCHAR(10) NOT NULL`

    database_viewAction(db, sql, res)
})

app.get('/deleteColumn', (req, res) => {
    let sql = `ALTER TABLE Order_Status 
               DROP COLUMN image`

    database_viewAction(db, sql, res)
})


// Delete Order Status Table
app.get('/delete', (req, res) => {
    let sql = 'DROP TABLE Order_Status'

    database_viewAction(db, sql, res)
})


module.exports = router