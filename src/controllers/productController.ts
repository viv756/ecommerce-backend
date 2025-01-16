import { rm } from "fs";
import { TryCatch } from "../middlewares/error.js";
import { Product } from "../models/product.model.js";
import { NewProductrequestBody } from "../types/types.js";
import ErrorHandler from "../utils/utility-class.js";

export const newProduct = TryCatch(
  async (req: Request<{}, {}, NewProductrequestBody>, res, next) => {
    const { name, price, stock, category, description } = req.body;
    const photo = req.file;

    if (!photo) return next(new ErrorHandler("Please add Photo", 400));

    if (!name || !price || !stock || !category || !description) {
      rm(photo.path, () => {
        console.log("Deleted");
      });
      return next(new ErrorHandler("Please enter All Fields", 400));
    }

    await Product.create({
      name,
      price,
      description,
      stock,
      category: category.toLowerCase(),
      photos: photo?.path,
    });

    return res.status(201).json({
      success: true,
      message: "Product Created Successfully",
    });
  }
);

export const getlatestProducts = TryCatch(async (req, res, next) => {
  const products = await Product.find({}).sort({ createdAt: -1 }).limit(5);

  return res.status(200).json({
    success: true,
    products,
  });
});
