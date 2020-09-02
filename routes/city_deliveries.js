const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()

// Create City
router.get('/add', (req, res) => {
    const { city } = req.query

    let sql = 'INSERT INTO city_deliveries SET ?'

    let category =  { 
                        city_name: city
                    }

    let query = databaseData_getQuery(db, sql, category, res)
})

// View City
router.get('/', (req, res) => {
    let sql = `SELECT * FROM city_deliveries
               ORDER BY city_name`

    let query = database_viewAction(db, sql, res)
})

// Delete City
router.get('/delete/:city', (req, res) => {
    let sql = `DELETE FROM city_deliveries 
               WHERE city_name = "${req.params.city}"`

    let query = database_viewAction(db, sql, res)
})

module.exports = router