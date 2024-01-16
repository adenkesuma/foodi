import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createUser = async(req, res) => {
  const user = req.body;
  const query = { email: user.email };

  try {
    const existingUser = await User.findOne(query);

    if (existingUser) {
      return res.status(302).send("User already exists!");
    }

    const result = await User.create(user);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
}


