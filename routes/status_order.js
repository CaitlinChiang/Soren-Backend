const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()

// View Order Status
router.get('/', (req, res) => {
    let sql = `SELECT * FROM status_order`

    let query = database_viewAction(db, sql, res)
})

module.exports = router