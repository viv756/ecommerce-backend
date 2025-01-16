import express from "express";
import { newUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/new", newUser);

export default router;
