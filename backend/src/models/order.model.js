const mongooose = require('mongoose');

// customerId	productId	price	status: completed, inProgress, cancelled
const orderSchema = mongooose.Schema({
  customerId: {
    type: mongooose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  productId: {
    type: mongooose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
});

module.exports = mongooose.model('Order', orderSchema);
