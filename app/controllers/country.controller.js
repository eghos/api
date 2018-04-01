var Country = require('../models/country.model.js');

exports.create = function(req, res) {
    // Create and Save 
    var name = req.params.name;
    var code = req.params.code;
    //console.log(name);
    //console.log(code);

    if(!name) {
        res.status(400).send("Country can not be empty");
    }
    if(!code){
    	res.status(400).send("Code can not be empty");
    }

    Country.findOne({'name':name}, function(err, country) {
    	if(err) {
            res.status(500).send('Not Found.');
        } else {
        	if(country){
        		res.send('Already Exist');
            	//console.log(country);
        	}else{
        		var country = new Country({name: name || "Untitled Country", code: code});

			    country.save(function(err, data) {
			        console.log(data);
			        if(err) {
			            console.log(err);
			            res.status(500).send("Some error occurred while creating the Country.");
			        } else {
			            res.send(data);
			        }
			    });
        	}
        	
        }
    });
    


    /*if(!req.body.name) {
        res.status(400).send("Country can not be empty");
    }
    var country = new Country({name: req.body.name || "Untitled Country", code: req.body.code});

    country.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send("Some error occurred while creating the Country.");
        } else {
            res.send(data);
        }
    });*/
};


exports.findAll = function(req, res) {
    // Retrieve and return all data from the database.

    if(typeof req.query.name !== 'undefined' ){
        if(req.query.name){
            var name= req.query.name;
            Country.findOne({'name':name}, function(err, country) {
                if(err) {
                    res.status(500).send('Not Found');
                } else {
                    if(country){
                        res.send(country.code);
                        //console.log(country);
                    }else{
                        res.send('Not Found');
                    }
                    
                }
            });
        }else{
            res.send("Name's Param Empty");
        }
        
    }else{
        Country.find(function(err, countries){
            if(err) {
                res.status(500).send("Some error occurred while retrieving data.");
            } else {
                res.send(countries);
            }
        });
    }    
};

exports.findOne = function(req, res) {
	var name = req.params.name;
  
	//console.log(name);
    Country.findOne({'name':name}, function(err, country) {
    	if(err) {
            res.status(500).send('Not Found');
        } else {
        	if(country){
        		res.send(country.code);
            	//console.log(country);
        	}else{
        		res.send('Not Found');
        	}
        	
        }
    });



};

exports.update = function(req, res) {


};

exports.delete = function(req, res) {


};