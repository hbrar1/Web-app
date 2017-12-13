var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var User = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  telephone: {
    type: Number
  },
  company: {
    type: String
  },
  visit: {
  	type: String
  },
  esc: {
  	type: String
  },
  esc_name: {
  	type: String
  }
},{
	collection: 'users'
});

module.exports = mongoose.model('User', User);
