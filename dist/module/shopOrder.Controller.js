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
exports.getOrdersByEmailController = exports.getAllOrdersController = exports.createOrderController = void 0;
const shopOrder_service_1 = require("./shopOrder.service");
const shopOrder_validation_1 = require("./shopOrder.validation");
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = shopOrder_validation_1.orderValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details.map((detail) => detail.message).join(", "),
        });
    }
    try {
        const order = yield shopOrder_service_1.orderServices.createOrder(req.body);
        res.status(201).json({
            success: true,
            message: "Order created successfully!",
            data: order,
        });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        res.status(500).json({
            success: false,
            message: "Error creating order",
            error: errorMessage,
        });
    }
});
exports.createOrderController = createOrderController;
const getAllOrdersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield shopOrder_service_1.orderServices.getAllOrders();
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: orders,
        });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        res.status(500).json({
            success: false,
            message: "Error fetching orders",
            error: errorMessage,
        });
    }
});
exports.getAllOrdersController = getAllOrdersController;
const getOrdersByEmailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    try {
        const orders = yield shopOrder_service_1.orderServices.getOrdersByEmail(email);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully for user email!",
            data: orders,
        });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        res.status(500).json({
            success: false,
            message: "Error fetching orders for user email",
            error: errorMessage,
        });
    }
});
exports.getOrdersByEmailController = getOrdersByEmailController;
