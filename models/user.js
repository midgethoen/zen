var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timestamp = require('mongoose-timestamp')

var UserSchema = new Schema({
  email: { type:String, required:true, unique: true },
  total: { type:Number }
});

UserSchema.plugin(timestamp)

module.exports = mongoose.model('User', UserSchema);
