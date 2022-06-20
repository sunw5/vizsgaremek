const mongooose = require('mongoose');

// customerId	productId	price	status: completed, inProgress, cancelled
const orderSchema = mongooose.Schema({
  customerId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
});

module.exports = mongooose.model('Order', orderSchema);
