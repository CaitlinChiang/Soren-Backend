const mysql = require('mysql')

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql051119-862282',
    database : 'soren'
})

db.connect((err) => {
    if (err) { throw err }
    console.log('MySql Connected...')
})

module.exports = db