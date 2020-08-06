const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


router.get('/', (req, res) => {
    let sql = `CREATE TABLE Order_Status( 
                                status_id     INT          AUTO_INCREMENT,
                                status_label  VARCHAR(10)  NOT NULL,

                                PRIMARY KEY(status_id)
                            )`

    database_viewAction(db, sql, res)
})

module.exports = router