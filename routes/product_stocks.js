const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()

// View Stock
router.get('/', (req, res) => {
    let sql = `SELECT * FROM product_stocks`

    let query = database_viewAction(db, sql, res)
})

module.exports = router