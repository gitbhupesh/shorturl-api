var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var URLSchema = new Schema({
  url: {type: String, required:true}, 
  path: {type: String, required: true}
})

module.exports = mongoose.model('URL', URLSchema)