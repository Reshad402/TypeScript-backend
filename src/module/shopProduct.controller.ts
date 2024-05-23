import { Request, Response } from "express";
import { productServices } from "./shopProduct.service";

import { productValidationSchema } from "./shopProduct.validation";

export const createProductController = async (req: Request, res: Response) => {
  const { error } = productValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details.map((detail) => detail.message).join(", "),
    });
  }

  try {
    const product = await productServices.createProduct(req.body);
    res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data: product,
    });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({
      success: false,
      message: "Error creating product",
      error: errorMessage,
    });
  }
};

export const getAllProductsController = async (req: Request, res: Response) => {
  const { searchTerm } = req.query;
  try {
    const products = await productServices.getAllProducts(searchTerm as string);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: products,
    });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: errorMessage,
    });
  }
};

export const getProductByIdController = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const product = await productServices.getProductById(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: product,
    });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({
      success: false,
      message: "Error fetching product",
      error: errorMessage,
    });
  }
};

export const updateProductController = async (req: Request, res: Response) => {
  const { productId } = req.params;

  const { error } = productValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details.map((detail) => detail.message).join(", "),
    });
  }

  try {
    const product = await productServices.updateProduct(productId, req.body);
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: product,
    });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({
      success: false,
      message: "Error updating product",
      error: errorMessage,
    });
  }
};

export const deleteProductController = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    await productServices.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({
      success: false,
      message: "Error deleting product",
      error: errorMessage,
    });
  }
};
