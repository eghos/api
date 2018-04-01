var mongoose = require('mongoose');

var DbSchema = mongoose.Schema({
    name: String,
    code: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Country', DbSchema);