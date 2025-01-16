import { TryCatch } from "../middlewares/error.js";
import { Product } from "../models/product.model.js";
import { NewProductrequestBody } from "../types/types.js";

export const newProduct = TryCatch(
  async (req: Request<{}, {}, NewProductrequestBody>, res, next) => {
    const { name, price, stock, category, description } = req.body;
    const photo = req.file;

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
