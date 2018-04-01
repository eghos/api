var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})



app.get('/', function(req, res){
    res.json("Hello, Please visit api/v1/countries");
});
app.get('/api', function(req, res){
    res.json("Hello, Please visit api/v1/countries");
});
app.get('/api/v1', function(req, res){
    res.json("Hello, Please visit api/v1/countries");
});

require('./app/routes/country.routes.js')(app);


app.listen(5000, function(){
    console.log("Server is listening on port 5000");
});