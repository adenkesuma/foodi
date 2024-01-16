import express from "express";
import { 
  getAllUsers ,
  createUser,
  deleteUser,
  getAdmin,
  makeAdmin
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.get("/admin/:email", getAdmin);
router.patch("/admin/:id", makeAdmin);

export default router;
