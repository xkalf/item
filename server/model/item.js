const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
  address: {type: String, required: true},
  registeredDate : {type: String},
  usedDate: {type: String},
  assPrice: {type: Number},
  description: {type: String},
  user: {type: String, required: true}
},{
  timestamps: true
})

module.exports = mongoose.model('Item', ItemSchema)