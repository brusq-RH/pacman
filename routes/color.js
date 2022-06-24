var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Database = require('../lib/database');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date());
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    next();
})

router.get('/colors',urlencodedParser,function(req,res,next) {
       
        var color = process.env.COLORE ||'rgb(255, 87, 51)';
        //red 255, 87, 51 
        //blue 0,191,255
        console.log("called color : "+color);
        //res.status(200);
        res.json(color);
        
});

module.exports = router;
