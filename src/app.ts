// src/app.ts
import cors from "cors";
import express, { Application } from "express";
import router from "./module/shopOrder.router";

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use("/api/products", router);

export default app;
