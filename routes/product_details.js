const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Product Detail Set
router.get('/add', (req, res) => {
    let sql      = 'INSERT INTO Product_Details SET ?'

    let category =  { 
                        product_id:      1, 
                        detail_size:     'L', 
                        deatil_color:    'Black',
                        available_stock: 5
                    }

    let query    = databaseData_getQuery(db, sql, category, res)
})


// View Product Detail Set
router.get('/', (req, res) => {
    let sql   = `SELECT * FROM Product_Details`

    let query = database_viewAction(db, sql, res)
})

router.get('/:id', (req, res) => {
    let sql   = `SELECT * FROM Product_Details
                 WHERE detail_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Update Product Detail Set
router.get('/update/:id', (req, res) => {
    let sql   = `UPDATE Product_Details
                 SET    detail_size = 'BPI Fund Transfer'
                 WHERE  detail_id   = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Delete Product Detail Set
router.get('/delete/:id', (req, res) => {
    let sql   = `DELETE FROM Product_Details 
                 WHERE detail_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


module.exports = router