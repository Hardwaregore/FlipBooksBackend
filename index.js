require('dotenv').config()
const express = require('express');
const flipBooks = express();
const PORT = 3547;

flipBooks.use(express.json())

// sD&wwHJ6o8o&Jciu8!o4C&s65fLmJ&94fPm#sCvwS&D%mpibLXEog!Q&xJ@sq96GD7oxNjLwuQ#WCfv#@GP7Jz**L7RT8^5$zW%&tU&gEWbMVqE%aB$EeU5SjMgVacfA
flipBooks.use((req, res, next) => {
    conn.query("SELECT * FROM `keys`", function (err, result) {
        if (err) {
            console.log("Uh-oh, the SQL server is f̶u̶*̶k̶e̶d̶ sad");
            throw err;
        };
        const apiKey = req.headers['authorization']; // Assuming the API key is sent in the 'x-api-key' header
    
        var expectedKey = result[0].apiKey;
        expectedKey = "Bearer " + expectedKey;
    
        if (apiKey && apiKey === expectedKey) {
            console.log('API Key Authentication Successful');
            next();
        } else {
            console.log('API Key Authentication Failed');
            res.status(401).send({ message: 'Lol you cant do that, so we f̶u̶*̶k̶e̶d̶ discarded your request for you' });
        }
    });


});

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
    console.log("Oh no, the server is f̶u̶*̶k̶e̶d̶ sad");
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
        };
        console.log("Query Seccessful!", result);
        // var json = JSON.parse(result);
        res.status(200).send(result);
    });

});

flipBooks.get('/phone/:id', (req, res) => {
    var id = req.params.id;
    // check if id is valid
    
    conn.query("SELECT * FROM `phones` WHERE `id` = " + id, function (err, result) {
        if (err) {
            console.log("Uh-oh, the SQL server is f̶u̶*̶k̶e̶d̶ sad");
            throw err;
        };
        if (result.length == 0) {
            res.status(404).send({message: "Uh-Oh, Phone #" + id + " is completely f̶u̶*̶k̶e̶d̶ sad"});
            return;
        }
        console.log("Query Seccessful!", result);
        res.status(200).send(result);
    });

})

flipBooks.post('/phone', (req, res) => {
    var id = req.body.id;
    var phone = req.body.phone;
    var storage = req.body.storage;
    var color = req.body.color;
    var purchasedFor = req.body.purchasedFor;
    var repairs = req.body.repairs;
    var repairCost = req.body.repairCost;
    var sellFor = req.body.sellFor;
    var profit = sellFor - purchasedFor - repairCost;
    var sold = req.body.sold;

    if (id == undefined || phone == undefined || storage == undefined || color == undefined || purchasedFor == undefined || repairs == undefined || repairCost == undefined || sellFor == undefined || sold == undefined) {
        res.status(400).send({message: "Uh-oh, your request is completely f̶u̶*̶k̶e̶d̶ sad"});
        return;
    }


    conn.query("INSERT INTO `phones` (`id`, `phone`, `storage`, `color`, `purchasedFor`, `repairs`, `repairCost`, `sellFor`, `profit`, `sold`) VALUES ('" + id + "', '" + phone + "', '" + storage + "', '" + color + "', '" + purchasedFor + "', '" + repairs + "', '" + repairCost + "', '" + sellFor + "', '" + profit + "', '" + sold + "')", function (err, result) {
        if (err) {
            console.log("Uh-oh, the SQL server is f̶u̶*̶k̶e̶d̶ sad");
            throw err;
        };
        res.status(200).send();
        
    });
})