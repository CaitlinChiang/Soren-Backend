const router = require("express").Router()
const db     = require('../sql_connection')
require('../tools/visualizeData')()

// Create Payment Medium
router.get('/add', (req, res) => {
    const { paymentMethod } = req.query

    let sql = 'INSERT INTO payment_mediums SET ?'

    let category =  { 
                        paymentMethod_name: paymentMethod
                    }

    let query    = databaseData_getQuery(db, sql, category, res)
})

// View Payment Medium
router.get('/', (req, res) => {
    let sql = `SELECT * FROM payment_mediums`

    let query = database_viewAction(db, sql, res)
})

// Delete Payment Medium
router.get('/delete/:paymentMethod', (req, res) => {
    let sql = `DELETE FROM payment_mediums 
               WHERE paymentMethod_name = "${req.params.paymentMethod}"`

    let query = database_viewAction(db, sql, res)
})


module.exports = router