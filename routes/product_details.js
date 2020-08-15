const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()


// Create Product Detail Set
router.get('/add', (req, res) => {
    const { productID, size, color } = req.query
    // change to productName

    let sql      = 'INSERT INTO Product_Details SET ?'

    let category =  { 
                        product_id:    productID, 
                        detail_size:   size, 
                        deatil_color:  color
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
router.get('/update', (req, res) => {
    const { productID, size, color } = req.query
    // change spelling of detail color
    let sql   = `UPDATE Product_Details
                 SET    detail_size = "${size}",  deatil_color = ${color}
                 WHERE  product_id  = ${productID}`

    let query = database_viewAction(db, sql, res)
})


// Delete Product Detail Set
router.get('/delete/:productID', (req, res) => {
    let sql   = `DELETE FROM Product_Details 
                 WHERE product_id = ${req.params.productID}`

    let query = database_viewAction(db, sql, res)
})


module.exports = router