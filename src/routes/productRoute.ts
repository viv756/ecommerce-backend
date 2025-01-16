import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { getlatestProducts, newProduct } from "../controllers/productController.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/new", adminOnly, singleUpload, newProduct);
router.get("/latest", getlatestProducts);


export default router;
