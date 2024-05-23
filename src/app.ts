import cors from "cors";
import express, { Application } from "express";
import productRouter from "./module/shopProduct.router";
import orderRouter from "./module/shopOrder.route";

const app: Application = express();

// Parsers ooof
app.use(express.json());
app.use(cors());

// all The  routes
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

export default app;
