var express = require('express');
var router = express.Router();

router.post('/create',function  (req, res, next) {
    // console.log(req.body);
    res.locals.connection.query(`insert into clients(client,bank,branch,country,state,district,code)
     values('${req.body.clientname}','${req.body.bankname}','${req.body.branchname}','${req.body.country}','${req.body.state}','${req.body.district}','${req.body.zip}')`, (error, results, fields) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

router.get('/clientsView', (req, res) => {
    // console.log(req.body);
    res.locals.connection.query('SELECT client,bank,branch,country,state,district,code FROM clients', (error, results)=> {
    if (error) throw error;
    res.send(JSON.stringify(results));
    });
});


router.get('/', (req, res, next) => {
	res.send("welcome JINO")
});
module.exports = router;
