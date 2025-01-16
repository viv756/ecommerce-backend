import express from "express";
import { deleteUser, getAllUsers, getUser, newUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/new", newUser);
router.get("/all", getAllUsers);
router.get("/:id").get("/:id", getUser).delete("/:id", deleteUser);

export default router;
