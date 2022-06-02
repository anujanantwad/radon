const express = require('express');
const externalModule = require('../logger/logger');
const helper = require('../util/helper');
const formatter=require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {

    externalModule.welcome()
    res.send('Welcome to my application. I am madhav and a part of FunctionUp Radon cohort.')
    
    // problem 2

helper.printDate();
helper.printMonth();
helper.getBatchInfo();

// problem 3
formatter.trim();
formatter.changetoLowerCase();
formatter.changetoUpperCase();

});




module.exports = router;
// adding this comment for no reason