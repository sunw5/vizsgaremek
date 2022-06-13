const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  "lastName": {
    type: String,
    required: true,
  },
  "firstName": {
    type: String,
    required: true,
  },
  "addressBill": {
    "zip": {
      type: String,
    },
    "city": {
      type: String,
    },
    "street": {
      type: String,
    },
  },
  "addressShip": {
    "zip": {
      type: String,
    },
    "city": {
      type: String,
    },
    "street": {
      type: String,
    },
  },
  "email": {
    type: String,
    required: true,
  },
  "phone": {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Customer', customerSchema);