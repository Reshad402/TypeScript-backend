"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const shopProduct_router_1 = __importDefault(require("./module/shopProduct.router"));
const shopOrder_route_1 = __importDefault(require("./module/shopOrder.route"));
const app = (0, express_1.default)();
// Parsers ooof
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// all The  routes
app.use("/api/products", shopProduct_router_1.default);
app.use("/api/orders", shopOrder_route_1.default);
exports.default = app;
