const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Product Color
router.get('/add', (req, res) => {
    const { color } = req.query

    let sql      = 'INSERT INTO Product_Colors SET ?'

    let category =  { 
                        color_name: color
                    }

    let query    = databaseData_getQuery(db, sql, category, res)
})


// View Product Colors
router.get('/', (req, res) => {
    let sql   = `SELECT * FROM Product_Colors`

    let query = database_viewAction(db, sql, res)
})

router.get('/:id', (req, res) => {
    let sql   = `SELECT * FROM Product_Colors
                 WHERE category_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Update Product Color
router.get('/update/:id', (req, res) => {
    let sql   = `UPDATE Product_Colors
                 SET    color_name  = 'BPI Fund Transfer'
                 WHERE  color_id    = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Delete Product Color
router.get('/delete/:color', (req, res) => {
    let sql   = `DELETE FROM Product_Colors 
                 WHERE color_name = "${req.params.color}"`

    let query = database_viewAction(db, sql, res)
})


module.exports = router