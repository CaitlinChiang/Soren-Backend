const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()

// Create Product Variant
router.get('/add', (req, res) => {
    const { product_id, size, color } = req.query

    let sql = 'INSERT INTO products_variants SET ?'

    let category =  { 
                        product_id: product_id, 
                        size_id: size, 
                        color_id: color
                    }

    let query = databaseData_getQuery(db, sql, category, res)
})

// View Product Variant
router.get('/', (req, res) => {
    let sql = `SELECT * FROM products_variants`

    let query = database_viewAction(db, sql, res)
})

// Update Product Variant
router.get('/update', (req, res) => {
    const { product_id, size, color } = req.query

    let sql = `UPDATE products_variants

                SET size_id = ${size},
                    color_id = ${color}

                WHERE product_id = ${product_id}`

    let query = database_viewAction(db, sql, res)
})

// Delete Product Variant
router.get('/delete/:product_id', (req, res) => {
    let sql = `DELETE FROM products_variants 
                 WHERE product_id = ${req.params.product_id}`

    let query = database_viewAction(db, sql, res)
})

module.exports = router