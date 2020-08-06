const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


router.get('/', (req, res) => {
    let sql = `CREATE TABLE Payment_Mediums( 
                                payment_id      INT          AUTO_INCREMENT,
                                payment_method  VARCHAR(20)  NOT NULL,

                                PRIMARY KEY(payment_id)
                            )`

    database_viewAction(db, sql, res)
})

module.exports = router