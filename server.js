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

app.use('/table_products', require('./tables/products'))
app.use('/table_productCategories', require('./tables/product_categories'))
app.use('/table_productDetails', require('./tables/product_details'))
app.use('/table_stockStatus', require('./tables/stock_status'))

app.use('/table_orders', require('./tables/orders'))
app.use('/table_cityDeliveries', require('./tables/city_deliveries'))
app.use('/table_orderStatus', require('./tables/order_status'))
app.use('/table_paymentMediums', require('./tables/payment_mediums'))
app.use('/table_paymentStatus', require('./tables/payment_status'))


// Routing
app.use('/products', require('./routes/products'))
app.use('/product_categories', require('./routes/product_categories'))
app.use('/product_details', require('./routes/product_details'))
app.use('/stock_status', require('./routes/stock_status'))

app.use('/orders', require('./routes/orders'))
app.use('/city_deliveries', require('./routes/city_deliveries'))
app.use('/order_status', require('./routes/order_status'))
app.use('/payment_mediums', require('./routes/payment_mediums'))
app.use('/payment_status', require('./routes/payment_status'))