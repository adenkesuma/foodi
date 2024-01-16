import Menu from "../models/Menu.js";

export const getAllMenuItems = async (req, res) => {
  try {
    const result = await Menu.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getMenuItemById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Menu.findById(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createMenuItem = async (req, res) => {
  try {
    const menuItem = req.body;
    const result = await Menu.create(menuItem);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateMenuItem = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, recipe, image, category, price } = req.body;

    const result = await Menu.findByIdAndUpdate(
      id,
      { $set: { name, recipe, image, category, price } },
      { new: true }
    );

    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteMenuItem = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Menu.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
