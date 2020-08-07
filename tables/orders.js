const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Orders Table
router.get('/add', (req, res) => {
    let sql = `CREATE TABLE Orders( 
                                order_id          INT           AUTO_INCREMENT,
                                customer_name     VARCHAR(100)  NOT NULL,
                                customer_mobile   VARCHAR(15)   NOT NULL,
                                customer_email    VARCHAR(50)   NOT NULL,
                                customer_address  VARCHAR(200)  NOT NULL,
                                city_id           INT           NOT NULL,
                                order_date        DATE          NOT NULL,
                                payment_id        INT           NOT NULL,
                                order_timestamp   TIMESTAMP     NOT NULL,
                                status_id         INT           NOT NULL,

                                PRIMARY KEY(order_id),

                                FOREIGN KEY(city_id)     REFERENCES City_Deliveries(city_id)     ON DELETE CASCADE ON UPDATE CASCADE,
                                FOREIGN KEY(payment_id)  REFERENCES Payment_Mediums(payment_id)  ON DELETE CASCADE ON UPDATE CASCADE,
                                FOREIGN KEY(status_id)   REFERENCES Order_Status(status_id)      ON DELETE CASCADE ON UPDATE CASCADE
                            )`

    database_viewAction(db, sql, res)
})


// View Orders Table Column Headers
router.get('/', (req, res) => {
    let sql = 'DESCRIBE Orders'

    database_viewAction(db, sql, res)
})


// Update Orders Columns
router.get('/addColumn', (req, res) => {
    let sql = `ALTER TABLE Orders 
               ADD COLUMN image VARCHAR(10) NOT NULL`

    database_viewAction(db, sql, res)
})

router.get('/deleteColumn', (req, res) => {
    let sql = `ALTER TABLE Orders 
               DROP COLUMN image`

    database_viewAction(db, sql, res)
})


// Delete Orders Table
router.get('/delete', (req, res) => {
    let sql = 'DROP TABLE Orders'

    database_viewAction(db, sql, res)
})


module.exports = router