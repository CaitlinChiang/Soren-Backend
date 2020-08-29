const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()

// Create Order Item
router.get('/add', (req, res) => {
    const { orderDetail_id, name, color, size, quantity } = req.query

    let sql = 'INSERT INTO order_items SET ?'

    let category =  { 
                        orderDetail_id: orderDetail_id,
                        product_name: name,
                        product_color: color,
                        product_size: size,
                        product_quantity: quantity
                    }

    let query = databaseData_getQuery(db, sql, category, res)
})

// View Order Item
router.get('/', (req, res) => {
    let sql = `SELECT * FROM order_items
                 ORDER BY orderItem_id DESC`

    let query = database_viewAction(db, sql, res)
})


module.exports = router