const mongoose = require('mongoose')

const RfidSchema = new mongoose.Schema({
  rfid_code: {type: Number, required: true, unique: true},
  ass_id: {type: Number, required: true, unique: true},
  type_id: {type: Number, required: true},
  ass_type: {type: String, required: true},
  ass_name: {type: String, required: true},
  description: {type: String}
},{
  timestamps: true
})

module.exports = mongoose.model('Rfid', RfidSchema)