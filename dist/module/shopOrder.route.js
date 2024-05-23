"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shopOrder_Controller_1 = require("./shopOrder.Controller");
const router = (0, express_1.Router)();
router.post("/", shopOrder_Controller_1.createOrderController);
router.get("/", shopOrder_Controller_1.getAllOrdersController);
router.get("/search", shopOrder_Controller_1.getOrdersByEmailController);
exports.default = router;
