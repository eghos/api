module.exports = function(app) {

    var countries = require('../controllers/country.controller.js');



    /** Coppy of version 1 url**/

    // Create a new Country
/*    app.get('/api/v1/countries/add/:name/:code', countries.create);*/

    // Retrieve all countries
 /*   app.get('/api/v1/countries', countries.findAll);*/

    // Retrieve a single Country with CountryId
    app.get('/api/v1/countries/:name', countries.findOne);

    app.get('/api/v1/countries', countries.findOne);

    // Update a Country with CountryId
   // app.put('/api/v1/countries/:CountryId', countries.update);

    // Delete a Country with CountryId
 //   app.delete('/api/v1/countries/:CountryId', countries.delete);


    /** Coppy of previus rout **/

    // Create a new Country
    //app.post('/countries', countries.create);
	
	// Create a new Country
    /*app.get('/countries/add/:name/:code', countries.create);

    // Retrieve all countries
    app.get('/countries', countries.findAll);

    // Retrieve a single Country with CountryId
    app.get('/countries/:name', countries.findOne);

    app.get('/countries', countries.findOne);

    // Update a Country with CountryId
    app.put('/countries/:CountryId', countries.update);

    // Delete a Country with CountryId
    app.delete('/countries/:CountryId', countries.delete);*/

}
