const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.listen('5000', () => console.log('Server on Port 5000'))

// Routes
app.use('/categories', require('./routes/categories'))
app.use('/products', require('./routes/products'))
app.use('/products_variants', require('./routes/products_variants'))
app.use('/product_sizes', require('./routes/product_sizes'))
app.use('/product_colors', require('./routes/product_colors'))
app.use('/product_stocks', require('./routes/product_stocks'))
app.use('/product_photos', require('./routes/product_photos'))
app.use('/order_details', require('./routes/order_details'))
app.use('/order_items', require('./routes/order_items'))
app.use('/status_order', require('./routes/status_order'))
app.use('/status_payment', require('./routes/status_payment'))
app.use('/city_deliveries', require('./routes/city_deliveries'))
app.use('/payment_mediums', require('./routes/payment_mediums'))

// Send Emails
app.use('/receipt', require('./email_receipt'))