// src/routes/productRoutes.ts
import { Router } from "express";
import {
  createProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
  deleteProductController,
} from "./shopproduct.controller";

const router = Router();

router.post("/", createProductController);
router.get("/", getAllProductsController);
router.get("/:productId", getProductByIdController);
router.put("/:productId", updateProductController);
router.delete("/:productId", deleteProductController);

export default router;
