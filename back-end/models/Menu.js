import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  recipe: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
