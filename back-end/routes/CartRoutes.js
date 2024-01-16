import express from "express";
import {
  getCartItems,
  getCartItemById,
  createCartItem,
  updateCartItem,
  getCartItemsByEmail,
  deleteCartItem,
} from "../controllers/CartController.js";

const router = express.Router();

router.get("/", getCartItems);
router.get("/:id", getCartItemById);
router.post("/", createCartItem);
router.put("/:id", updateCartItem);
router.get("/email", getCartItemsByEmail);
router.delete("/:id", deleteCartItem);

export default router;
