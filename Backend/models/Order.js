// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   customerName: { type: String, required: true },
//   orderDate: { type: Date, default: Date.now },
//   products: [
//     {
//       product: { type: mongoose.Schema.Types.ObjectId, ref: 'products', required: true },
//       quantity: { type: Number, required: true },
//     },
//   ],
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // קישור להזמנה עם המשתמש
// });

// const Order = mongoose.model('Order', orderSchema);

// module.exports = Order;



//models/Order.js
// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   customerName: { type: String, required: true },
//   email: { type: String, required: true },
//   address: { type: String, required: true },
//   phone: { type: String, required: true },
//   paymentMethod: { type: String, required: true },
//   items: [
//     {
//       product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//       quantity: { type: Number, required: true },
//       totalPrice: { type: Number, required: true },
//     },
//   ],
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   status: { type: String, default: 'Pending' },
//   totalAmount: { type: Number, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// const Order = mongoose.model('Order', orderSchema);

// module.exports = Order;


// const mongoose = require('mongoose');

// const orderItemSchema = new mongoose.Schema({
//   product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//   quantity: { type: Number, required: true },
//   totalPrice: { type: Number, required: true },
// });

// const orderSchema = new mongoose.Schema({
//   items: [orderItemSchema],
//   totalAmount: { type: Number, required: true },
//   status: { type: String, default: 'Pending', required: true },
//   customerName: { type: String, required: true },
//   email: { type: String, required: true },
//   address: { type: String, required: true },
//   phone: { type: String, required: true },
//   paymentMethod: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// const Order = mongoose.model('Order', orderSchema);

// module.exports = Order;


const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'Pending', required: true },
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;


