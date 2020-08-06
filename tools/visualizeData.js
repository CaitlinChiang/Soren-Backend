module.exports = function() {

    this.database_viewAction = (db, sql, res) => {
        db.query(sql, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send(result)
        })
    }

    this.databaseData_getQuery = (db, sql, category, res) => {
        db.query(sql, category, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send(result)
        })
    }
    
}