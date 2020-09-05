const mysql = require('mysql')

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'leyasutr_soren',
    password : '3P=^BRVL#xS!',
    database : 'leyasutr_sorenapparel'
})

db.connect((err) => {
    if (err) { throw err }
    console.log('MySQL Connected...')
})

module.exports = db