// src/services/product.service.ts
import { Product } from "./shopOrder.model";
import { IProduct } from "./shopOrder.interface";

const createProduct = async (productData: IProduct) => {
  const product = new Product(productData);
  return await product.save();
};

const getAllProducts = async (searchTerm?: string) => {
  if (searchTerm) {
    return await Product.find({ name: { $regex: searchTerm, $options: "i" } });
  }
  return await Product.find({});
};

const getProductById = async (productId: string) => {
  return await Product.findById(productId);
};

const updateProduct = async (
  productId: string,
  productData: Partial<IProduct>
) => {
  return await Product.findByIdAndUpdate(productId, productData, { new: true });
};

const deleteProduct = async (productId: string) => {
  return await Product.findByIdAndDelete(productId);
};

export const productServices = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
