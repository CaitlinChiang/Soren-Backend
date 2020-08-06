const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create City
router.get('/add', (req, res) => {
    let sql      = 'INSERT INTO City_Deliveries SET ?'

    let category =  { 
                        city_name: 'SanJuan'
                    }

    let query    = databaseData_getQuery(db, sql, category, res)
})


// View City
router.get('/', (req, res) => {
    let sql   = `SELECT * FROM City_Deliveries`

    let query = database_viewAction(db, sql, res)
})

router.get('/:id', (req, res) => {
    let sql   = `SELECT * FROM City_Deliveries
                 WHERE city_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Update City
router.get('/update/:id', (req, res) => {
    let sql   = `UPDATE City_Deliveries
                 SET    city_name = 'Marikina'
                 WHERE  city_id   = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Delete City
router.get('/delete/:id', (req, res) => {
    let sql   = `DELETE FROM City_Deliveries 
                 WHERE city_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


module.exports = router