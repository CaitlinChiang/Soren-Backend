const express = require('express')
const mysql   = require('mysql')

const app = express();

app.listen('3000', () => console.log('Server on Port 3000'))

// Connect Database
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'Soren'
})

db.connect((err) => {
    if (err) { throw err }
    console.log('MySql Connected...')
})

// Create Database
// app.get('/create_db', (req, res) => {
//     let sql = 'CREATE DATABASE *Insert Database Name*'
//     db.query(sql, (err, result) => {
//         if (err) throw err
//         console.log(result)
//         res.send('Database Created...')
//     })
// })

// Create Table
app.get('/create_table', (req, res) => {
    let sql = 'CREATE TABLE products(product_id INT AUTO_INCREMENT, product_name VARCHAR(20), product_price DECIMAL(7, 2), product_sizes, product_colors, product_stock INT)'

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('Table Created...')
    })
})



// NOTE FOR FINAL PRODUCTION: DROP TEST TABLES AND REPLACE WITH REAL ONES