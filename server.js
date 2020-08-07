const express = require('express')

const app = express()

const db = require('./sql_connection')
require('./tools/visualizeData')()

app.listen('5000', () => console.log('Server on Port 5000'))


// Tables
app.get('/viewTables', (req, res) => {
    let sql = 'SHOW TABLES'

    database_viewAction(db, sql, res)
})

app.use('/createTable_products', require('./tables/products'))
app.use('/createTable_productCategories', require('./tables/product_categories'))
app.use('/createTable_productDetails', require('./tables/product_details'))

app.use('/createTable_orders', require('./tables/orders'))
app.use('/createTable_cityDeliveries', require('./tables/city_deliveries'))
app.use('/createTable_orderStatus', require('./tables/order_status'))
app.use('/createTable_paymentMediums', require('./tables/payment_mediums'))


// Routing
app.use('/products', require('./routes/products'))
app.use('/product_categories', require('./routes/product_categories'))
app.use('/product_details', require('./routes/product_details'))

app.use('/orders', require('./routes/orders'))
app.use('/city_deliveries', require('./routes/city_deliveries'))
app.use('/order_status', require('./routes/order_status'))
app.use('/payment_mediums', require('./routes/payment_mediums'))