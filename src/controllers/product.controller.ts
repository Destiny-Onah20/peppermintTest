import { Request, Response } from "express";
import Product from "../models/product.model";
import { validateProductData } from "../helpers/user.validator";

class ProductContoller {
  async addProduct(req: Request, res: Response) {
    try {
      const { name, price, description, quantity } = req.body;
      const requestBody = {
        name,
        price,
        description,
        quantity,
      };
      if (!validateProductData(requestBody)) {
        return res.status(400).json({ message: "Invalid product data" });
      }
      const product = await Product.create(requestBody);
      if (!product) {
        return res.status(400).json({ message: "Failed to add product" });
      }
      return res.status(201).json({
        message: "Product added successfully",
        data: product,
      });
    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
            status: "failed"
        })
    }
  }

  async fetchAllProduct(req: Request, res: Response) {
      try {
        const products = await Product.find();
        if (!products) {
          return res.status(400).json({ message: "Failed to fetch products" });
        }
        return res.status(200).json({
          message: "Products fetched successfully",
          data: products
        });
      } catch (error: any) {
        return res.status(500).json({
            message: error.message,
            status: "failed"
        })
      }
  }
}

export default ProductContoller;
