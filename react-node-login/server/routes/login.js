var express = require('express');
var router = express.Router();

router.post('/login',function  (req, res, next) {
    // console.log(req.body);
    res.locals.connection.query(`SELECT * FROM login WHERE username='${req.body.username}' AND password='${req.body.password}'`, (error, results, fields) => {
        if (error) throw error;
        if (results.length > 0) {
            res.cookie('user',results[0].id, { maxAge: 900000, httpOnly: true })
        res.status(200).json({ success: true, user: results[0] });
        } else {
            res.status(404).json({ success: false, msg: 'Invalid username or password' });
        }
    });
});


router.get('/', (req, res, next) => {
	res.send("welcome login page")
});
module.exports = router;