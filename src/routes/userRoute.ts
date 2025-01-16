import express from "express";
import { deleteUser, getAllUsers, getUser, newUser } from "../controllers/userController.js";
import { adminOnly } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", newUser);
router.get("/all", adminOnly, getAllUsers);
router.get("/:id").get("/:id", getUser).delete("/:id", adminOnly, deleteUser);

export default router;
