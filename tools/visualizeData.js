module.exports = function() {

    this.database_viewAction = (db, sql, res) => {
        db.query(sql, (err, results) => {
            if (err) return res.send(err)
            console.log(results)
            return res.json({ data: results })
        })
    }

    this.databaseData_getQuery = (db, sql, category, res) => {
        db.query(sql, category, (err, results) => {
            if (err) return res.send(err)
            console.log(results)
            return res.json({ data: results })
        })
    }
    
}