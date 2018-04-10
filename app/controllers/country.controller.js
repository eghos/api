var Country = require('../../server.js');

/* exports.findAll = function(req, res) {
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
*/

exports.findOne = function(req, res) {
	var name = req.query.name;
  
	//console.log(name);
    Country.countryModel.findOne({'name':name}, function(err, country) {
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

