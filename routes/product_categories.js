const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Product Category
router.get('/add', (req, res) => {
    let sql      = 'INSERT INTO Product_Categories SET ?'

    let category =  { 
                        category_name: 'Shirts' 
                    }

    let query    = databaseData_getQuery(db, sql, category, res)
})


// View Product Category
router.get('/', (req, res) => {
    let sql   = `SELECT * FROM Product_Categories`

    let query = database_viewAction(db, sql, res)
})

router.get('/:id', (req, res) => {
    let sql   = `SELECT * FROM Product_Categories
                 WHERE category_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Update Product Category
router.get('/update/:id', (req, res) => {
    let sql   = `UPDATE Product_Categories
                 SET    category_name = 'BPI Fund Transfer'
                 WHERE  category_id   = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Delete Product Category
router.get('/delete/:id', (req, res) => {
    let sql   = `DELETE FROM Product_Categories 
                 WHERE category_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


module.exports = router