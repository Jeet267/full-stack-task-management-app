// const mongoose = require('mongoose');

// const OrderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   items: [
//     {
//       menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' },
//       quantity: Number,
//     },
//   ],
//   totalAmount: { type: Number, required: true },
//   status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Order', OrderSchema);

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  username: { type: String, required: true },
  items: [
    {
      menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
