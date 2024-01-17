import express from "express";
import {
  getCartItems,
  getCartItemById,
  createCartItem,
  updateCartItem,
  getCartItemsByEmail,
  deleteCartItem,
} from "../controllers/CartController.js";
import verifyToken from "../middleware/VerifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getCartItemsByEmail);
router.get("/:id", getCartItemById);
router.post("/", createCartItem);
router.put("/:id", updateCartItem);
router.get("/all", verifyToken, getCartItems);
router.delete("/:id", deleteCartItem);

export default router;
