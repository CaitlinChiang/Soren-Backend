const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create City Deliveries Table
router.get('/add', (req, res) => {
    let sql = `CREATE TABLE City_Deliveries( 
                                city_id    INT          AUTO_INCREMENT,
                                city_name  VARCHAR(15)  NOT NULL,

                                PRIMARY KEY(city_id)
                            )`

    database_viewAction(db, sql, res)
})


// View City Deliveries Table Column Headers
router.get('/', (req, res) => {
    let sql = 'DESCRIBE City_Deliveries'

    database_viewAction(db, sql, res)
})


// Update City Deliveries Columns
router.get('/addColumn', (req, res) => {
    let sql = `ALTER TABLE City_Deliveries 
               ADD COLUMN image VARCHAR(10) NOT NULL`

    database_viewAction(db, sql, res)
})

router.get('/deleteColumn', (req, res) => {
    let sql = `ALTER TABLE City_Deliveries 
               DROP COLUMN image`

    database_viewAction(db, sql, res)
})


// Delete City Deliveries Table
router.get('/delete', (req, res) => {
    let sql = 'DROP TABLE City_Deliveries'

    database_viewAction(db, sql, res)
})


module.exports = router