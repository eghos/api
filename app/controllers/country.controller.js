var Country = require('../../server.js');

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

