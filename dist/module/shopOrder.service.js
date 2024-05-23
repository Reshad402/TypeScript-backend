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
exports.orderServices = void 0;
// src/services/order.service.ts
const shopOrder_model_1 = require("./shopOrder.model");
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const order = new shopOrder_model_1.Order(orderData);
    return yield order.save();
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield shopOrder_model_1.Order.find({});
});
const getOrdersByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield shopOrder_model_1.Order.find({ email });
});
exports.orderServices = {
    createOrder,
    getAllOrders,
    getOrdersByEmail,
};
