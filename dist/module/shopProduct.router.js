"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/productRoutes.ts
const express_1 = require("express");
const shopProduct_controller_1 = require("./shopProduct.controller");
const router = (0, express_1.Router)();
router.post("/", shopProduct_controller_1.createProductController);
router.get("/", shopProduct_controller_1.getAllProductsController);
router.get("/:productId", shopProduct_controller_1.getProductByIdController);
router.put("/:productId", shopProduct_controller_1.updateProductController);
router.delete("/:productId", shopProduct_controller_1.deleteProductController);
exports.default = router;
