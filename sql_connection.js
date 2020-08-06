const mysql = require('mysql')

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

module.exports = db


// app.get('/create_db', (req, res) => {
//     let sql = 'CREATE DATABASE *Insert Database Name*'
//     database_viewAction(sql, res)
// })