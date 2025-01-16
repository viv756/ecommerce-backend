import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  getAdminProducts,
  getAllCategories,
  getlatestProducts,
  newProduct,
} from "../controllers/productController.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/new", adminOnly, singleUpload, newProduct);
router.get("/latest", getlatestProducts);
router.get("/categories", getAllCategories);
router.get("/admin-products", adminOnly, getAdminProducts);

export default router;
