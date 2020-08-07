const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Products Table
router.get('/add', (req, res) => {
    let sql = `CREATE TABLE Products( 
                                product_id     INT             AUTO_INCREMENT,
                                category_id    INT             NOT NULL,
                                product_name   VARCHAR(20)     NOT NULL, 
                                product_price  DECIMAL(10, 2)  NOT NULL,

                                PRIMARY KEY(product_id),

                                FOREIGN KEY(category_id)  REFERENCES Product_Categories(category_id)  ON DELETE CASCADE ON UPDATE CASCADE
                            )`

    database_viewAction(db, sql, res)
})


// View Products Table Column Headers
router.get('/', (req, res) => {
    let sql = 'DESCRIBE Products'

    database_viewAction(db, sql, res)
})


// Update Products Columns
router.get('/addColumn', (req, res) => {
    let sql = `ALTER TABLE Products 
               ADD COLUMN image VARCHAR(10) NOT NULL`

    database_viewAction(db, sql, res)
})

router.get('/deleteColumn', (req, res) => {
    let sql = `ALTER TABLE Products 
               DROP COLUMN image`

    database_viewAction(db, sql, res)
})


// Delete Products Table
router.get('/delete', (req, res) => {
    let sql = 'DROP TABLE Products'

    database_viewAction(db, sql, res)
})


module.exports = router