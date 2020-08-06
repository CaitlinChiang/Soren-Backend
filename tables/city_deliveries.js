const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


router.get('/', (req, res) => {
    let sql = `CREATE TABLE City_Deliveries( 
                                city_id    INT          AUTO_INCREMENT,
                                city_name  VARCHAR(15)  NOT NULL,

                                PRIMARY KEY(city_id)
                            )`

    database_viewAction(db, sql, res)
})

module.exports = router