const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Order Items Table
router.get('/add', (req, res) => {
    let sql = `CREATE TABLE Order_Items( 
                                orderItem_id   INT          AUTO_INCREMENT,
                                order_id       INT          NOT NULL,
                                product_id     INT          NOT NULL,
                                product_color  VARCHAR(10)  NOT NULL,
                                product_size   VARCHAR(5)   NOT NULL,

                                PRIMARY KEY(orderItem_id),

                                FOREIGN KEY(order_id)    REFERENCES Orders(order_id)      ON DELETE CASCADE ON UPDATE CASCADE,
                                FOREIGN KEY(product_id)  REFERENCES Products(product_id)  ON DELETE CASCADE ON UPDATE CASCADE
                            )`

    database_viewAction(db, sql, res)
})


// View Order Items Table Column Headers
router.get('/', (req, res) => {
    let sql = 'DESCRIBE Order_Items'

    database_viewAction(db, sql, res)
})


// Update Order Items Columns
router.get('/addColumn', (req, res) => {
    let sql = `ALTER TABLE Order_Items 
               ADD COLUMN image VARCHAR(10) NOT NULL`

    database_viewAction(db, sql, res)
})

router.get('/deleteColumn', (req, res) => {
    let sql = `ALTER TABLE Order_Items 
               DROP COLUMN image`

    database_viewAction(db, sql, res)
})


// Delete Order Items Table
router.get('/delete', (req, res) => {
    let sql = 'DROP TABLE Order_Items'

    database_viewAction(db, sql, res)
})


module.exports = router