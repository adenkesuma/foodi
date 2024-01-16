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

export const deleteUser = async(req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).send("user not found");
    }

    res.send(deletedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAdmin = async(req, res) => {
  const email = req.params.email;
  const query = { email: email };

  try {
    const user = await User.findONe(query);

    if (email !== req.decoded.email) {
      return res.status(403).send("forbidden access");
    }

    let admin = false;

    if (user) {
      admin = user?.role === "admin";
    }

    res.status(200).json({ admin });

  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const makeAdmin = async(req, res) => {
  const userId = req.params.id;
  const { name, email, photoURL, role } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, { role: "admin" }, { new: true, runValidators: true });
    
    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.send(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
