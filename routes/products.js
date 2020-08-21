const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()

// Create Product
router.get('/add', (req, res) => {
    const { product_category, name, price } = req.query

    let sql = 'INSERT INTO products SET ?'

    let category =  { 
                        category_id: product_category, 
                        product_name: name,
                        product_price: price,
                        stock_id: 1
                    }

    let query = databaseData_getQuery(db, sql, category, res)
})

// View Product
router.get('/', (req, res) => {
    let sql = `SELECT * FROM products
               ORDER BY product_id DESC`

    let query = database_viewAction(db, sql, res)
})

router.get('/:id', (req, res) => {
    let sql = `SELECT * FROM products
               WHERE product_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})

// Update Product
router.get('/update/:id', (req, res) => {
    const { product_category, name, price, stock } = req.query

    let sql = `UPDATE products

                SET category_id = ${product_category},  
                    product_name = "${name}", 
                    product_price = ${price},
                    stockStatus_id = ${stock}

                WHERE product_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})

// Delete Product
router.get('/delete/:id', (req, res) => {
    let sql = `DELETE FROM products 
               WHERE product_id = ${req.params.id}`

    let query = database_viewAction(db, sql, res)
})


module.exports = router