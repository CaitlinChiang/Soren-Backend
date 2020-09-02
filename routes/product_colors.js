const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()

// Create Product Color
router.get('/add', (req, res) => {
    const { color } = req.query

    let sql = 'INSERT INTO product_colors SET ?'

    let category =  { 
                        color_name: color
                    }

    let query = databaseData_getQuery(db, sql, category, res)
})

// View Product Color
router.get('/', (req, res) => {
    let sql = `SELECT * FROM product_colors`

    let query = database_viewAction(db, sql, res)
})

// Delete Product Color
router.get('/delete/:color', (req, res) => {
    let sql = `DELETE FROM product_colors 
                 WHERE color_name = "${req.params.color}"`

    let query = database_viewAction(db, sql, res)
})

module.exports = router