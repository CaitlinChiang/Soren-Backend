const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Product Sizes Table
router.get('/add', (req, res) => {
    let sql = `CREATE TABLE Product_Sizes( 
                                size_id     INT         AUTO_INCREMENT, 
                                size_label  VARCHAR(5)  NOT NULL,

                                PRIMARY KEY(size_id)
                            )`

    database_viewAction(db, sql, res)
})


// View Product Sizes Table Column Headers
router.get('/', (req, res) => {
    let sql = 'DESCRIBE Product_Sizes'

    database_viewAction(db, sql, res)
})


// Update Product Sizes Columns
router.get('/addColumn', (req, res) => {
    let sql = `ALTER TABLE Product_Sizes 
               ADD COLUMN image VARCHAR(10) NOT NULL`

    database_viewAction(db, sql, res)
})

router.get('/deleteColumn', (req, res) => {
    let sql = `ALTER TABLE Product_Sizes 
               DROP COLUMN image`

    database_viewAction(db, sql, res)
})


// Delete Product Sizes Table
router.get('/delete', (req, res) => {
    let sql = 'DROP TABLE Product_Sizes'

    database_viewAction(db, sql, res)
})


module.exports = router