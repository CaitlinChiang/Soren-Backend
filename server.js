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





// NOTE FOR FINAL PRODUCTION: DROP TEST_PRODUCT DATABSE, CREATE PRODUCT DATABASE + DELETE UNCESSARY CODE