const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Product
router.get('/add', (req, res) => {
    let sql      = 'INSERT INTO Products SET ?'

    let category =  { 
                        category_id:   1, 
                        product_name:  'Shirt2', 
                        product_price: 600.00 
                    }

    let query    = databaseData_getQuery(db, sql, category, res)
})


// View Product
router.get('/', (req, res) => {
    let sql   = `SELECT * FROM Products`

    // let sql = `SELECT * FROM Product_Categories
    //            WHERE category_id = 1 OR category_id = 2
    //            ORDER BY category_name DESC`

    // let sql = `SELECT Product_Categories.category_name 
    //            AS category
    //            FROM Product_Categories`

    let query = database_viewAction(db, sql, res)
})

router.get('/:id', (req, res) => {
    let sql   = `SELECT * FROM Products
                 WHERE product_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Update Product
router.get('/update/:id', (req, res) => {
    let sql   = `UPDATE Products
                 SET    product_name = 'BPI Fund Transfer'
                 WHERE  product_id   = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


// Delete Product
router.get('/delete/:id', (req, res) => {
    let sql   = `DELETE FROM Products 
                 WHERE product_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


module.exports = router