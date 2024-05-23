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
exports.deleteProductController = exports.updateProductController = exports.getProductByIdController = exports.getAllProductsController = exports.createProductController = void 0;
const shopProduct_service_1 = require("./shopProduct.service");
const shopProduct_validation_1 = require("./shopProduct.validation");
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = shopProduct_validation_1.productValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details.map((detail) => detail.message).join(", "),
        });
    }
    try {
        const product = yield shopProduct_service_1.productServices.createProduct(req.body);
        res.status(201).json({
            success: true,
            message: "Product created successfully!",
            data: product,
        });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        res.status(500).json({
            success: false,
            message: "Error creating product",
            error: errorMessage,
        });
    }
});
exports.createProductController = createProductController;
const getAllProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = req.query;
    try {
        const products = yield shopProduct_service_1.productServices.getAllProducts(searchTerm);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: products,
        });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        res.status(500).json({
            success: false,
            message: "Error fetching products",
            error: errorMessage,
        });
    }
});
exports.getAllProductsController = getAllProductsController;
const getProductByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        const product = yield shopProduct_service_1.productServices.getProductById(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: product,
        });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        res.status(500).json({
            success: false,
            message: "Error fetching product",
            error: errorMessage,
        });
    }
});
exports.getProductByIdController = getProductByIdController;
const updateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const { error } = shopProduct_validation_1.productValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details.map((detail) => detail.message).join(", "),
        });
    }
    try {
        const product = yield shopProduct_service_1.productServices.updateProduct(productId, req.body);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: product,
        });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        res.status(500).json({
            success: false,
            message: "Error updating product",
            error: errorMessage,
        });
    }
});
exports.updateProductController = updateProductController;
const deleteProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        yield shopProduct_service_1.productServices.deleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        res.status(500).json({
            success: false,
            message: "Error deleting product",
            error: errorMessage,
        });
    }
});
exports.deleteProductController = deleteProductController;
