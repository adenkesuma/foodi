import Cart from "../models/Cart.js";

export const getCartItems = async (req, res) => {
  try {
    const result = await Cart.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getCartItemById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Cart.findById(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createCartItem = async (req, res) => {
  try {
    const cartItem = req.body;
    const result = await Cart.create(cartItem);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const id = req.params.id;
    const { quantity } = req.body;

    const result = await Cart.findByIdAndUpdate(
      id,
      { $set: { quantity: parseInt(quantity, 10) } },
      { new: true }
    );

    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getCartItemsByEmail = async (req, res) => {
  try {
    const email = req.query.email;
    const filter = { email: email };
    const result = await Cart.find(filter);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Cart.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
