"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
// src/services/product.service.ts
const shopProduct_model_1 = require("./shopProduct.model");
const createProduct = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new shopProduct_model_1.Product(productData);
    return yield product.save();
});
const getAllProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        return yield shopProduct_model_1.Product.find({ name: { $regex: searchTerm, $options: "i" } });
    }
    return yield shopProduct_model_1.Product.find({});
});
const getProductById = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield shopProduct_model_1.Product.findById(productId);
});
const updateProduct = (productId, productData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield shopProduct_model_1.Product.findByIdAndUpdate(productId, productData, { new: true });
});
const deleteProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield shopProduct_model_1.Product.findByIdAndDelete(productId);
});
exports.productServices = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
