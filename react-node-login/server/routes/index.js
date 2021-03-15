var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	res.render('index', { title: "welcome JINO"})
});



/* GET home page. */
router.get('/api', function(req, res, next) {
  res.render('index', { title: 'welcome to rcms project' });
});






router.get('/loginuser', function(req, res, next) {
	if(req.session.user){
  		res.json(req.session.user);
	} else {
		res.json("no user");
	}
});

module.exports = router;
