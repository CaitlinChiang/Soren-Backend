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



// View Actions Performed to the Database Tables
databaseTable_viewAction = (sql, res) => {
    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send(result)
    })
}



// Create Database
// app.get('/create_db', (req, res) => {
//     let sql = 'CREATE DATABASE *Insert Database Name*'
//     
//     databaseTable_viewAction(sql, res)
// })



// Create Database Table
app.get('/createTable_productCategory', (req, res) => {
    let sql = `CREATE TABLE Product_Categories( 
                                category_id    INT          AUTO_INCREMENT, 
                                category_name  VARCHAR(10)  NOT NULL,

                                PRIMARY KEY(category_id)
                            )`

    databaseTable_viewAction(sql, res)
})

app.get('/createTable_products', (req, res) => {
    let sql = `CREATE TABLE Products( 
                                product_id     INT             AUTO_INCREMENT,
                                category_id    INT             NOT NULL,
                                product_name   VARCHAR(20)     NOT NULL, 
                                product_price  DECIMAL(10, 2)  NOT NULL,

                                PRIMARY KEY(product_id),

                                FOREIGN KEY(category_id)
                                REFERENCES Product_Categories(category_id)
                            )`

    databaseTable_viewAction(sql, res)
})

app.get('/createTable_productDetails', (req, res) => {
    let sql = `CREATE TABLE Product_Details( 
                                detail_id        INT          AUTO_INCREMENT,
                                product_id       INT          NOT NULL,
                                detail_size      VARCHAR(5)   NOT NULL,
                                deatil_color     VARCHAR(15)  NOT NULL,
                                available_stock  INT          NOT NULL,

                                PRIMARY KEY(detail_id),

                                FOREIGN KEY(product_id)  REFERENCES Products(product_id)
                            )`

    databaseTable_viewAction(sql, res)
})

app.get('/createTable_cityDeliveries', (req, res) => {
    let sql = `CREATE TABLE City_Deliveries( 
                                city_id    INT          AUTO_INCREMENT,
                                city_name  VARCHAR(15)  NOT NULL,
                    
                                PRIMARY KEY(city_id)
                            )`

    databaseTable_viewAction(sql, res)
})

app.get('/createTable_orderStatus', (req, res) => {
    let sql = `CREATE TABLE Order_Status( 
                                status_id     INT          AUTO_INCREMENT,
                                status_label  VARCHAR(10)  NOT NULL,

                                PRIMARY KEY(status_id)
                            )`

    databaseTable_viewAction(sql, res)
})

app.get('/createTable_paymentMediums', (req, res) => {
    let sql = `CREATE TABLE Payment_Mediums( 
                                payment_id      INT          AUTO_INCREMENT,
                                payment_method  VARCHAR(20)  NOT NULL,

                                PRIMARY KEY(payment_id)
                            )`

    databaseTable_viewAction(sql, res)
})

app.get('/createTable_orders', (req, res) => {
    let sql = `CREATE TABLE Orders( 
                                order_id          INT           AUTO_INCREMENT,
                                customer_name     VARCHAR(100)  NOT NULL,
                                customer_mobile   VARCHAR(15)   NOT NULL,
                                customer_email    VARCHAR(50)   NOT NULL,
                                customer_address  VARCHAR(200)  NOT NULL,
                                city_id           INT           NOT NULL,
                                order_date        DATE          NOT NULL,
                                payment_id        INT           NOT NULL,
                                order_timestamp   TIMESTAMP     NOT NULL,
                                status_id         INT           NOT NULL,

                                PRIMARY KEY(order_id),

                                FOREIGN KEY(city_id)     REFERENCES City_Deliveries(city_id),
                                FOREIGN KEY(payment_id)  REFERENCES Payment_Mediums(payment_id),
                                FOREIGN KEY(status_id)   REFERENCES Order_Statu(status_id)
                            )`

    databaseTable_viewAction(sql, res)
})

// Read / View Database Table
app.get('/viewTable', (req, res) => {
    let sql = 'SHOW TABLES'

    databaseTable_viewAction(sql, res)
})

app.get('/viewTableColumn', (req, res) => {
    let sql = 'DESCRIBE Products'

    databaseTable_viewAction(sql, res)
})

// Update Database Table
app.get('/addTableColumn', (req, res) => {
    let sql = `ALTER TABLE products 
               ADD image VARCHAR(10)`

    databaseTable_viewAction(sql, res)
})

app.get('/deleteTableColumn', (req, res) => {
    let sql = `ALTER TABLE products 
               DROP COLUMN image`

    databaseTable_viewAction(sql, res)
})

// Delete Database Table
app.get('/deleteTable', (req, res) => {
    let sql = 'DROP TABLE Product_Categories'

    databaseTable_viewAction(sql, res)
})



// Create Data for Database Tables
app.get('/addItem_productCategory', (req, res) => {
    let category = { category_name: 'Masks' }
    let sql      = 'INSERT INTO Product_Categories SET ?'

    let query = db.query(sql, category, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send(result)
    })
})
//finish for the other tables


// Read Data from Database Tables

// Update Data from Database Tables

// Delete Data from Database Tables