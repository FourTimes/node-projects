var express = require('express');
var router = express.Router();



router.post('/new', function (req, res, next) {
    // console.log(req.body);
    res.locals.connection.query(`insert into register(firstname,lastname,username,city,state,zip)
     values('${req.body.FirstName}','${req.body.LastName}','${req.body.Username}','${req.body.City}','${req.body.State}','${req.body.Zip}')`, (error, results, fields) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});


router.get('/users', function (req, res, next) {
    res.locals.connection.query('SELECT id,firstname,lastname,username,city,state,zip FROM register', (error, results, fields) => {
        if (error) throw error;
        res.json(results);
    });
});


router.get('/edit/:id', function (req, res, next) {
    res.locals.connection.query(`SELECT id,firstname,lastname,username,city,state,zip FROM register where id = ${req.params.id}`, (error, results, fields) => {
        if (error) throw error;
        console.log(results[0]);
        res.json(results[0]);
    });
});


router.post('/update', function (req, res, next) {
    res.locals.connection.query(`UPDATE register SET firstname='${req.body.FirstName}',lastname='${req.body.LastName}',username='${req.body.Username}',city='${req.body.City}',state='${req.body.State}',zip='${req.body.Zip}' where id = ${req.body.id}`, (error, results, fields) => {
        if (error) throw error;
        console.log(results[0]);
        res.json(results[0]);
    });
});

router.post('/transaction', function (req, res, next) {
    res.locals.connection.query(`insert into transaction(a,b,c,d,e,f,g,h,i,j,total)
    values(${req.body.a},${req.body.b},${req.body.c},${req.body.d},${req.body.e},${req.body.f},${req.body.g},${req.body.h},${req.body.i},${req.body.j},${req.body.total})`, (error, results, fields) => {
        if (error) throw error;
        // console.log(results);
        res.json(results);
    });
});


router.post('/bank', function (req, res, next) {
    let where = '';
    const {
        amount,
        selectCountType
    } = req.body;
    const type = selectCountType;
    if (type === 'a') {
        where = `WHERE a = ${amount}`;
    } else if (type === 'b') {
        where = `WHERE b = ${amount}`;
    } else if (type === 'c') {
        where = `WHERE c = ${amount}`;
    } else if (type === 'd') {
        where = `WHERE d = ${amount}`;
    } else if (type === 'd') {
        where = `WHERE e = ${amount}`;
    } else if (type === 'f') {
        where = `WHERE f = ${amount}`;
    } else if (type === 'g') {
        where = `WHERE g = ${amount}`;
    } else if (type === 'h') {
        where = `WHERE h = ${amount}`;
    } else if (type === 'i') {
        where = `WHERE i = ${amount}`;
    } else if (type === 'j') {
        where = `WHERE j = ${amount}`;
    } 
    // else {
    //     where = '';
    // }
    if (where !== '') {
        res.locals.connection.query(`SELECT * FROM transaction ${where} `, (error, results, fields)  => {
            if(error) throw error;
            // console.log(results);
            res.json(results);
        });
    } else {
        res.json('No Record');
    }

});


router.get('/denominationlist', function (req, res, next) {
    res.locals.connection.query('SELECT counttype FROM countdenomination', (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        res.json(results);
    });
});


module.exports = router;
