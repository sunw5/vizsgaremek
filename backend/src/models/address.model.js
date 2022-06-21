const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
  zip: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Address', addressSchema);
