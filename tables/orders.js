const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


router.get('/', (req, res) => {
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

module.exports = router