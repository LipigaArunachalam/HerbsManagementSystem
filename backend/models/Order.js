const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerNumber: { type: String, required: true },
  customerAddress: { type: String, required: true },
  paymentMode: { type: String, required: true },
  expectedDelivery: { type: Date, required: true },
  products: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true }
    }
  ],
  totalAmount: { type: Number, required: true }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
