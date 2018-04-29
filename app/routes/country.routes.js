module.exports = function(app) {

    var countries = require('../controllers/country.controller.js');


    // Retrieve a single Country with CountryId
    app.get('/api/v1/countries/:name', countries.findOne);

    app.get('/api/v1/countries', countries.findOne);

}
