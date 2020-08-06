const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


router.get('/', (req, res) => {
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

module.exports = router