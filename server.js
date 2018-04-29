var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Configuring the database
//var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/apicountry');

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");

// Define Schema
    var DbSchema = mongoose.Schema({
    name: String,
    code: String
}, {
    timestamps: true
});
 
    // Map schema to model
    var country = mongoose.model('Country', DbSchema);
	module.exports.countryModel = mongoose.model('Country', DbSchema);
	
    //  Document instances
	var uk = new country({name: 'UK', code: 'GB'});
	var france = new country({name: 'France', code: 'FR'});
	var spain = new country({name: 'Spain', code: 'ES'});
	var ireland = new country({name: 'Ireland', code: 'IR'});

	
	country.findOne({'name':'UK'}, function(err, ukExist) {
    	if(err) {
            console.log('Some Error');
        } else {
        	if(ukExist){
        		console.log('Already exists');
        	}else{
        		// save model to database
				uk.save(function (err, ebho) {
				  if (err) return console.error(err);
				  console.log(ebho.name + " database.");
				});
        	}
        	
        }
    });
	
	country.findOne({'name':'France'}, function(err, franceExist) {
    	if(err) {
            console.log('Some Error');
        } else {
        	if(franceExist){
        		console.log('Already exists');
        	}else{
        		france.save(function (err, ebho) {
				  if (err) return console.error(err);
				  console.log(ebho.name + " database.");
				});
        	}
        	
        }
    });
	
	country.findOne({'name':'Spain'}, function(err, spainExist) {
    	if(err) {
            console.log('Some Error');
        } else {
        	if(spainExist){
        		console.log('Already exists');
        	}else{
        		spain.save(function (err, ebho) {
				  if (err) return console.error(err);
				  console.log(ebho.name + " database.");
				});
        	}
        	
        }
    });
	
	country.findOne({'name':'Ireland'}, function(err, irelandExist) {
    	if(err) {
            console.log('Some Error');
        } else {
        	if(irelandExist){
        		console.log('Already exists');
        	}else{
        		ireland.save(function (err, ebho) {
				  if (err) return console.error(err);
				  console.log(ebho.name + " database.");
				});
        	}
        	
        }
    });
	
module.exports = country;

});

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






