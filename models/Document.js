const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const documentSchema = new Schema({
  title: String,
  description: String,
  owner: { type: Schema.Types.ObjectId, ref: 'Document' }

});

const Document = mongoose.model('Document', documentSchema);
module.exports = Document;