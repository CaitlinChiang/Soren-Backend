const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


router.get('/', (req, res) => {
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

module.exports = router