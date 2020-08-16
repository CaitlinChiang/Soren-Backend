const express = require('express')
const cors = require('cors')

const app = express()


const db = require('./sql_connection')
require('./tools/visualizeData')()

app.use(cors())

app.listen('5000', () => console.log('Server on Port 5000'))


// Tables
app.get('/viewTables', (req, res) => {
    let sql = 'SHOW TABLES'

    database_viewAction(db, sql, res)
})

app.use('/table_products', require('./tables/products'))
app.use('/table_productCategories', require('./tables/product_categories'))
app.use('/table_productDetails', require('./tables/product_details'))

app.use('/table_productSizes', require('./tables/product_sizes'))
app.use('/table_productColors', require('./tables/product_colors'))
app.use('/table_stockStatus', require('./tables/stock_status'))

app.use('/table_orders', require('./tables/orders'))
app.use('/table_orderItems', require('./tables/order_items'))
app.use('/table_cityDeliveries', require('./tables/city_deliveries'))
app.use('/table_orderStatus', require('./tables/order_status'))
app.use('/table_paymentMediums', require('./tables/payment_mediums'))
app.use('/table_paymentStatus', require('./tables/payment_status'))


// Routing
app.use('/products', require('./routes/products'))
app.use('/product_details', require('./routes/product_details'))

app.use('/product_categories', require('./routes/product_categories'))
app.use('/product_sizes', require('./routes/product_sizes'))
app.use('/product_colors', require('./routes/product_colors'))
app.use('/stock_status', require('./routes/stock_status'))

app.use('/city_deliveries', require('./routes/city_deliveries'))
app.use('/payment_mediums', require('./routes/payment_mediums'))

app.use('/orders', require('./routes/orders'))
app.use('/order_items', require('./routes/order_items'))

app.use('/order_status', require('./routes/order_status'))
app.use('/payment_status', require('./routes/payment_status'))