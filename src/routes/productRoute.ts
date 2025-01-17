import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  deleteProduct,
  getAdminProducts,
  getAllCategories,
  getAllProducts,
  getlatestProducts,
  getSingleProduct,
  newProduct,
  updateProduct,
} from "../controllers/productController.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/new", singleUpload, newProduct);
router.get("/latest", getlatestProducts);
router.get("/all", getAllProducts);
router.get("/categories", getAllCategories);
router.get("/admin-products", adminOnly, getAdminProducts);
router
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly, singleUpload, updateProduct)
  .delete(adminOnly, deleteProduct);

export default router;
