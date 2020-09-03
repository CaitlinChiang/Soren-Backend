const router = require("express").Router()
const db = require('../sql_connection')
require('../tools/visualizeData')()

// Create Product Photo Url
router.get('/add', (req, res) => {
    const { product_id, photo_type, photo_url } = req.query

    let sql = 'INSERT INTO product_photos SET ?'

    let category =  { 
                        product_id: product_id,
                        url_photo: photo_type,
                        url_link: photo_url
                    }

    let query = databaseData_getQuery(db, sql, category, res)
})

// View Product Photo Url
router.get('/', (req, res) => {
    let sql = `SELECT * FROM product_photos`

    let query = database_viewAction(db, sql, res)
})

// Delete Product Photo Url
router.get('/delete/:product_id', (req, res) => {
    let sql = `DELETE FROM product_photos
               WHERE product_id = ${req.params.product_id}`

    let query = database_viewAction(db, sql, res)
})

module.exports = router