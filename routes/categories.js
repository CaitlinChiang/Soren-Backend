const router = require("express").Router()
const db = require('../sql_connection')
require('../tools/visualizeData')()

// View Category
router.get('/', (req, res) => {
    let sql = `SELECT * FROM categories`

    let query = database_viewAction(db, sql, res)
})

module.exports = router