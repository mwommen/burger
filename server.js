var express = require('express');
var bodyParser = require('body-parser');
var hndbs = require('express-handlebars');
var burgerRouter = require('./Controllers/burgers_controller');

let app = express();
var PORT = process.env.PORT || 3307;

app.use(express.static('public'));
app.engine("handlebars", hndbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

app.use(burgerRouter);


app.listen(PORT, function(err){
	if(err) throw err;
	console.log('Connected and running on PORT: ' + PORT);
});

