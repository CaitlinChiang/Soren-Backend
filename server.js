const express = require('express')
const mysql   = require('mysql')

const app = express();

app.listen('5000', () => console.log('Server on Port 5000'))



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



// View Actions Performed to the Database
database_viewAction = (sql, res) => {
    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send(result)
    })
}

databaseData_getQuery = (sql, category, res) => {
    db.query(sql, category, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send(result)
    })
}



// Create Database
// app.get('/create_db', (req, res) => {
//     let sql = 'CREATE DATABASE *Insert Database Name*'
//     
//     database_viewAction(sql, res)
// })



// Create Database Table
app.get('/createTable_productCategories', (req, res) => {
    let sql = `CREATE TABLE Product_Categories( 
                                category_id    INT          AUTO_INCREMENT, 
                                category_name  VARCHAR(10)  NOT NULL,

                                PRIMARY KEY(category_id)
                            )`

    database_viewAction(sql, res)
})

app.get('/createTable_products', (req, res) => {
    let sql = `CREATE TABLE Products( 
                                product_id     INT             AUTO_INCREMENT,
                                category_id    INT             NOT NULL,
                                product_name   VARCHAR(20)     NOT NULL, 
                                product_price  DECIMAL(10, 2)  NOT NULL,

                                PRIMARY KEY(product_id),

                                FOREIGN KEY(category_id)  REFERENCES Product_Categories(category_id)  ON DELETE CASCADE ON UPDATE CASCADE
                            )`

    database_viewAction(sql, res)
})

app.get('/createTable_productDetails', (req, res) => {
    let sql = `CREATE TABLE Product_Details( 
                                detail_id        INT          AUTO_INCREMENT,
                                product_id       INT          NOT NULL,
                                detail_size      VARCHAR(5)   NOT NULL,
                                deatil_color     VARCHAR(15)  NOT NULL,
                                available_stock  INT          NOT NULL,

                                PRIMARY KEY(detail_id),

                                FOREIGN KEY(product_id)  REFERENCES Products(product_id)  ON DELETE CASCADE ON UPDATE CASCADE
                            )`

    database_viewAction(sql, res)
})

app.get('/createTable_cityDeliveries', (req, res) => {
    let sql = `CREATE TABLE City_Deliveries( 
                                city_id    INT          AUTO_INCREMENT,
                                city_name  VARCHAR(15)  NOT NULL,
                    
                                PRIMARY KEY(city_id)
                            )`

    database_viewAction(sql, res)
})

app.get('/createTable_orderStatus', (req, res) => {
    let sql = `CREATE TABLE Order_Status( 
                                status_id     INT          AUTO_INCREMENT,
                                status_label  VARCHAR(10)  NOT NULL,

                                PRIMARY KEY(status_id)
                            )`

    database_viewAction(sql, res)
})

app.get('/createTable_paymentMediums', (req, res) => {
    let sql = `CREATE TABLE Payment_Mediums( 
                                payment_id      INT          AUTO_INCREMENT,
                                payment_method  VARCHAR(20)  NOT NULL,

                                PRIMARY KEY(payment_id)
                            )`

    database_viewAction(sql, res)
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

                                FOREIGN KEY(city_id)     REFERENCES City_Deliveries(city_id)     ON DELETE CASCADE ON UPDATE CASCADE,
                                FOREIGN KEY(payment_id)  REFERENCES Payment_Mediums(payment_id)  ON DELETE CASCADE ON UPDATE CASCADE,
                                FOREIGN KEY(status_id)   REFERENCES Order_Status(status_id)      ON DELETE CASCADE ON UPDATE CASCADE
                            )`

    database_viewAction(sql, res)
})

// Read / View Database Table
app.get('/viewTables', (req, res) => {
    let sql = 'SHOW TABLES'

    database_viewAction(sql, res)
})

app.get('/viewTableColumns', (req, res) => {
    let sql = 'DESCRIBE Product_Categories'

    database_viewAction(sql, res)
})

// Update Database Table
app.get('/addTableColumn', (req, res) => {
    let sql = `ALTER TABLE products 
               ADD COLUMN image VARCHAR(10) NOT NULL`

    database_viewAction(sql, res)
})

app.get('/deleteTableColumn', (req, res) => {
    let sql = `ALTER TABLE products 
               DROP COLUMN image`

    database_viewAction(sql, res)
})

// Delete Database Table
app.get('/deleteTable', (req, res) => {
    let sql = 'DROP TABLE Products'

    database_viewAction(sql, res)
})



// Create Data for Database Table
app.get('/addData_productCategories', (req, res) => {
    let sql      = 'INSERT INTO Product_Categories SET ?'

    let category =  { 
                        category_name: 'Shirts' 
                    }

    let query    = databaseData_getQuery(sql, category, res)
})

app.get('/addData_products', (req, res) => {
    let sql      = 'INSERT INTO Products SET ?'

    let category =  { 
                        category_id:   1, 
                        product_name:  'Shirt7', 
                        product_price: 500.00 
                    }

    let query    = databaseData_getQuery(sql, category, res)
})

app.get('/addData_productDetails', (req, res) => {
    let sql      = 'INSERT INTO Product_Details SET ?'

    let category =  { 
                        product_id:      1, 
                        detail_size:     'L', 
                        deatil_color:    'Black',
                        available_stock: 5
                    }

    let query    = databaseData_getQuery(sql, category, res)
})

app.get('/addData_cityDeliveries', (req, res) => {
    let sql      = 'INSERT INTO City_Deliveries SET ?'

    let category =  { 
                        city_name: 'SanJuan'
                    }

    let query    = databaseData_getQuery(sql, category, res)
})

app.get('/addData_orderStatus', (req, res) => {
    let sql      = 'INSERT INTO Order_Status SET ?'

    let category =  { 
                        status_label: 'Ready'
                    }

    let query    = databaseData_getQuery(sql, category, res)
})

app.get('/addData_paymentMediums', (req, res) => {
    let sql      = 'INSERT INTO Payment_Mediums SET ?'

    let category =  { 
                        payment_method: 'Cash on Delivery'
                    }

    let query    = databaseData_getQuery(sql, category, res)
})

app.get('/addData_orders', (req, res) => {
    let sql      = 'INSERT INTO Orders SET ?'

    let category =  { 
                        customer_name:    'Jeriel',
                        customer_mobile:  '09988629001',
                        customer_email:   'jerieltiu2012@gmail.com',
                        customer_address: '139 Kalaw St.',
                        city_id:          1,
                        order_date:       '2020-08-04',
                        payment_id:       1,
                        order_timestamp:  '2020-08-04 05:45:11',
                        status_id:        1
                    }

    let query    = databaseData_getQuery(sql, category, res)
})

// Read Data from Database Table
app.get('/viewData', (req, res) => {
    let sql = 'SELECT * FROM Orders'

    // let sql = `SELECT * FROM Product_Categories
    //            WHERE category_id = 1 OR category_id = 2
    //            ORDER BY category_name DESC`

    // let sql = `SELECT Product_Categories.category_name 
    //            AS category
    //            FROM Product_Categories`

    database_viewAction(sql, res)
})

// Update Data from Database Table
app.get('/updateData', (req, res) => {
    let sql = `UPDATE Product_Categories
               SET    category_name = 'Shirts'
               WHERE  category_name = 'Masks'`

    database_viewAction(sql, res)
})

// Delete Data from Database Table
app.get('/deleteData', (req, res) => {
    let sql = `DELETE FROM Orders 
               WHERE order_id > 1 AND order_id < 5`

    database_viewAction(sql, res)
})