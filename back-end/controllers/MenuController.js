import Menu from "../models/Menu.js";

export const getAllMenuItems = async (req, res) => {
  try {
    const result = await Menu.find({}).sort({ createdAt: -1 }).maxTimeMS(5000);

    if (!result) {
      res.status(404).send("there are no menu")
    }

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

    if (!result) {
      return res.status(404).send("No menu item with that ID");
    }

    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteMenuItem = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Menu.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).send("Menu not found");
    }
    
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
