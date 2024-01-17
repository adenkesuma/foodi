import express from "express";
import { 
  getAllUsers ,
  createUser,
  deleteUser,
  getAdmin,
  makeAdmin
} from "../controllers/UserController.js";
import verifyToken from "../middleware/VerifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getAllUsers);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.get("/admin/:email", getAdmin);
router.patch("/admin/:id", makeAdmin);

export default router;
