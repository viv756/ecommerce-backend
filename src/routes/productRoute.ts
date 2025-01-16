import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { newProduct } from "../controllers/productController.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/new", adminOnly, singleUpload, newProduct);


export default router;
