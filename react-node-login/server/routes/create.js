const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("welcome JINO")
});

router.get('/transaction', (req, res) => {
    // console.log(req.body);
    res.locals.connection.query("SELECT client FROM clients", (error, results)=> {
    if (error) throw error;
    res.send(JSON.stringify(results));
    });
});

router.post('/transactionDetails', (req, res) => {
    // console.log(req.body);
    res.locals.connection.query(`SELECT * FROM clients WHERE client='${req.body.clientname}'`, (error, results)=> {
    if (error) throw error;
    res.send(JSON.stringify(results[0]));
    });
});




router.post('/transactionCreate',function  (req, res, next) {
    // console.log(req.body);
    res.locals.connection.query(`insert into createtransaction(client,transactiondate,bank,branch,country,state,district,code,amount)
     values('${req.body.clientname}','${req.body.transactionDate}','${req.body.bankname}','${req.body.branchname}','${req.body.country}','${req.body.statename}','${req.body.district}','${req.body.code}','${req.body.amount}')`, (error, results, fields) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});


router.get('/transactionView', (req, res) => {
    // console.log(req.body);
    res.locals.connection.query('SELECT client,transactiondate,bank,branch,country,state,district,code,amount FROM createtransaction', (error, results)=> {
    if (error) throw error;
    res.send(JSON.stringify(results));
    });
});


module.exports = router;