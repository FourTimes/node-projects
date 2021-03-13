const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const mysql = require('mysql');


PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("welcome to fourtimes api server");
})

app.get('/data', (req, res) => {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: process.env.SERVICE,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DB
    });

    connection.connect();

    connection.query('SELECT * FROM data', (error, results, fields) => {
        if (error) throw error;
        res.send(results)
    });

    connection.end();
})

app.listen(PORT, () => {
    console.log('Listening on port %s', PORT);
})