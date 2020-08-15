const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Product Sizes
router.get('/add', (req, res) => {
    const { size } = req.query

    let sql      = 'INSERT INTO Product_Sizes SET ?'

    let category =  { 
                        size_label: size 
                    }

    let query    = databaseData_getQuery(db, sql, category, res)
})


// View Product Sizes
router.get('/', (req, res) => {
    let sql   = `SELECT * FROM Product_Sizes`

    let query = database_viewAction(db, sql, res)
})

router.get('/:id', (req, res) => {
    let sql   = `SELECT * FROM Product_Sizes
                 WHERE category_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Update Product Sizes
router.get('/update/:id', (req, res) => {
    let sql   = `UPDATE Product_Sizes
                 SET    size_label = 'BPI Fund Transfer'
                 WHERE  size_id    = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Delete Product Sizes
router.get('/delete/:size', (req, res) => {
    let sql   = `DELETE FROM Product_Sizes 
                 WHERE size_label = "${req.params.size}"`

    let query = database_viewAction(db, sql, res)
})


module.exports = router