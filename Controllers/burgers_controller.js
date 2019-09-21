var express =  require('express');
var burgerRouter = express.Router();
var Burger = require('../models/burger');

burgerRouter.get('/', function(req, res){
    Burger.selectAll(function(results){
        const burgerData = {
            burgers: results
        }
        res.render('index', burgerData);
    })
});

module.exports = burgerRouter;