import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

// Mendapatkan detail item keranjang berdasarkan ID
router.get("/:id", async (req, res) => {
  try {
    const result = await Cart.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Menambahkan item baru ke keranjang
router.post("/", async (req, res) => {
  try {
    const cartItem = req.body;
    const result = await Cart.create(cartItem);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Mengupdate item di keranjang berdasarkan ID
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { quantity } = req.body;

    const result = await Cart.findByIdAndUpdate(
      id,
      { $set: { quantity: parseInt(quantity, 10) } },
      { new: true } // Mengembalikan dokumen yang diperbarui
    );

    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Mendapatkan semua item di keranjang berdasarkan email
router.get("/", async (req, res) => {
  try {
    const email = req.query.email;
    const filter = { email: email };
    const result = await Cart.find(filter);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Menghapus item dari keranjang berdasarkan ID
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Cart.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
