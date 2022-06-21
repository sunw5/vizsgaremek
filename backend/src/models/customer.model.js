const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  addressBillId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
    required: true,
  },
  addressShipId: {  
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Customer', customerSchema);