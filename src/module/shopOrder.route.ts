import { Router } from "express";
import {
  createOrderController,
  getAllOrdersController,
  getOrdersByEmailController,
} from "./shopOrder.Controller";

const router = Router();

router.post("/", createOrderController);
router.get("/", getAllOrdersController);
router.get("/search", getOrdersByEmailController);

export default router;
