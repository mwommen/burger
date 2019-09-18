var express = require('express');
var bodyParser = require('body-parser');
var hndbs = require('express-handlebars');



let app = express();
var PORT = process.env.PORT || 3306;

app.use(express.static('public'));

// What does this do??!!
app.use(bodyParser.urlencoded({ extended:true}));

app.use(bodyParser.json());

