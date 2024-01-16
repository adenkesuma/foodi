import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
   menuItemId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
