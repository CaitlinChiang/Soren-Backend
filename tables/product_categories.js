const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Product Categories Table
router.get('/add', (req, res) => {
    let sql = `CREATE TABLE Product_Categories( 
                                category_id    INT          AUTO_INCREMENT, 
                                category_name  VARCHAR(10)  NOT NULL,

                                PRIMARY KEY(category_id)
                            )`

    database_viewAction(db, sql, res)
})


// View Product Categories Table Column Headers
router.get('/', (req, res) => {
    let sql = 'DESCRIBE Product_Categories'

    database_viewAction(db, sql, res)
})


// Update Product Categories Columns
router.get('/addColumn', (req, res) => {
    let sql = `ALTER TABLE Product_Categories 
               ADD COLUMN image VARCHAR(10) NOT NULL`

    database_viewAction(db, sql, res)
})

router.get('/deleteColumn', (req, res) => {
    let sql = `ALTER TABLE Product_Categories 
               DROP COLUMN image`

    database_viewAction(db, sql, res)
})


// Delete Product Categories Table
router.get('/delete', (req, res) => {
    let sql = 'DROP TABLE Product_Categories'

    database_viewAction(db, sql, res)
})


module.exports = router