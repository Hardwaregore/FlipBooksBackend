require('dotenv').config()
const express = require('express');
const flipBooks = express();
const PORT = 3547;

flipBooks.use(express.json())

var sql = require('mysql');

var username = process.env.MYSQL_USER;
var password = process.env.MYSQL_PASSWORD;

var conn = sql.createConnection({
    host: "localhost",
    user: username,
    password: password,
    database: "FlipBooks"
});

try {
    flipBooks.listen (PORT)
} catch(e) {
    console.log("Oh no, this server is f̶u̶*̶k̶e̶d̶ sad");
    process.exit();
} finally {
    console.log("The FlipBooks Server is now Ready!");
}

conn.connect(function(err) {
    if (err) { 
        console.log("Uh-oh, the SQL server is f̶u̶*̶k̶e̶d̶ sad");
        process.exit();
    }
    console.log("MySQL is Connected Successfully");
});

flipBooks.get('/phone', (req, res) => {
    conn.query("SELECT * FROM `phones`", function (err, result) {
        if (err) {
            console.log("Uh-oh, the SQL server is f̶u̶*̶k̶e̶d̶ sad");
            throw err;
            process.exit();
        };
        console.log("Query Seccessful!", result);
        // var json = JSON.parse(result);
        res.status(200).send(result);
    });
    // id, phone, storage, color, purchasedFor, repairs, repairCost, sellFor, profit, sold
    /*
        [
            RowDataPacket {
                id: 1,
                phone: 'iPhone 12 Pro Max',
                storage: 256,
                color: 'Space Gray',
                purchasedFor: 300,
                repairs: 'Screen Refurbish',
                repairCost: 50,
                sellFor: 400,
                profit: 50,
                sold: 0
            },
            RowDataPacket {
                id: 2,
                phone: 'iPhone 13 Pro',
                storage: 128,
                color: 'Product Red',
                purchasedFor: 310,
                repairs: 'Screen Refurbish',
                repairCost: 50,
                sellFor: 400,
                profit: 40,
                sold: 0
            }
        ]
    */

});

