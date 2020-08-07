const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Product Details Table
router.get('/add', (req, res) => {
    let sql = `CREATE TABLE Product_Details( 
                                detail_id        INT          AUTO_INCREMENT,
                                product_id       INT          NOT NULL,
                                detail_size      VARCHAR(5)   NOT NULL,
                                deatil_color     VARCHAR(15)  NOT NULL,
                                available_stock  INT          NOT NULL,

                                PRIMARY KEY(detail_id),

                                FOREIGN KEY(product_id)  REFERENCES Products(product_id)  ON DELETE CASCADE ON UPDATE CASCADE
                            )`

    database_viewAction(db, sql, res)
})


// View Product Details Table Column Headers
router.get('/', (req, res) => {
    let sql = 'DESCRIBE Product_Details'

    database_viewAction(db, sql, res)
})


// Update Product Details Columns
router.get('/addColumn', (req, res) => {
    let sql = `ALTER TABLE Product_Details 
               ADD COLUMN image VARCHAR(10) NOT NULL`

    database_viewAction(db, sql, res)
})

router.get('/deleteColumn', (req, res) => {
    let sql = `ALTER TABLE Product_Details 
               DROP COLUMN image`

    database_viewAction(db, sql, res)
})


// Delete Product Details Table
router.get('/delete', (req, res) => {
    let sql = 'DROP TABLE Product_Details'

    database_viewAction(db, sql, res)
})


module.exports = router