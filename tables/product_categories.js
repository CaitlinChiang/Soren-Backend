const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


router.get('/', (req, res) => {
    let sql = `CREATE TABLE Product_Categories( 
                                category_id    INT          AUTO_INCREMENT, 
                                category_name  VARCHAR(10)  NOT NULL,

                                PRIMARY KEY(category_id)
                            )`

    database_viewAction(db, sql, res)
})

module.exports = router