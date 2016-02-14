var mongoose = require('mongoose');

module.exports = mongoose.model('Cat', {
	Name : String,
	Color : String
});
