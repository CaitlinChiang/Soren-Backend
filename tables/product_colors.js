const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Product Colors Table
router.get('/add', (req, res) => {
    let sql = `CREATE TABLE Product_Colors( 
                                color_id    INT          AUTO_INCREMENT, 
                                color_name  VARCHAR(10)  NOT NULL,

                                PRIMARY KEY(color_id)
                            )`

    database_viewAction(db, sql, res)
})


// View Product Colors Table Column Headers
router.get('/', (req, res) => {
    let sql = 'DESCRIBE Product_Colors'

    database_viewAction(db, sql, res)
})


// Update Product Colors Columns
router.get('/addColumn', (req, res) => {
    let sql = `ALTER TABLE Product_Colors 
               ADD COLUMN image VARCHAR(10) NOT NULL`

    database_viewAction(db, sql, res)
})

router.get('/deleteColumn', (req, res) => {
    let sql = `ALTER TABLE Product_Colors 
               DROP COLUMN image`

    database_viewAction(db, sql, res)
})


// Delete Product Colors Table
router.get('/delete', (req, res) => {
    let sql = 'DROP TABLE Product_Colors'

    database_viewAction(db, sql, res)
})


module.exports = router