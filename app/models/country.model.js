var mongoose = require('mongoose');

var DbSchema = mongoose.Schema({
    name: String,
    code: String
}, {
    timestamps: true
});

var country = mongoose.model('Country', DbSchema);
module.exports = country;
