const router = require("express").Router()
const db = require('../sql_connection')
require('../tools/visualizeData')()

// Create Product Size
router.get('/add', (req, res) => {
    const { size } = req.query

    let sql = 'INSERT INTO product_sizes SET ?'

    let category =  { 
                        size_name: size 
                    }

    let query = databaseData_getQuery(db, sql, category, res)
})

// View Product Size
router.get('/', (req, res) => {
    let sql = `SELECT * FROM product_sizes`

    let query = database_viewAction(db, sql, res)
})

// Delete Product Size
router.get('/delete/:size', (req, res) => {
    let sql = `DELETE FROM product_sizes 
                 WHERE size_name = "${req.params.size}"`

    let query = database_viewAction(db, sql, res)
})

module.exports = router