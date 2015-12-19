var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timestamp = require('mongoose-timestamp')

var ZentrySchema = new Schema({
  total: Number,
  user: String
});

ZentrySchema.plugin(timestamp)

module.exports = mongoose.model('Zentry', ZentrySchema);
