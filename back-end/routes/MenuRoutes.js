import express from "express";
import Menu from "../models/Menu.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await Menu.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
