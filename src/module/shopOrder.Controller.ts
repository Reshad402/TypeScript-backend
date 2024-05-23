// src/controllers/orderController.ts
import { Request, Response } from "express";
import { orderServices } from "./shopOrder.service";
import { orderValidationSchema } from "./shopOrder.validation";

export const createOrderController = async (req: Request, res: Response) => {
  const { error } = orderValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details.map((detail: any) => detail.message).join(", "),
    });
  }

  try {
    const order = await orderServices.createOrder(req.body);
    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data: order,
    });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({
      success: false,
      message: "Error creating order",
      error: errorMessage,
    });
  }
};

export const getAllOrdersController = async (req: Request, res: Response) => {
  try {
    const orders = await orderServices.getAllOrders();
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: orders,
    });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({
      success: false,
      message: "Error fetching orders",
      error: errorMessage,
    });
  }
};

export const getOrdersByEmailController = async (
  req: Request,
  res: Response
) => {
  const { email } = req.query;
  try {
    const orders = await orderServices.getOrdersByEmail(email as string);
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully for user email!",
      data: orders,
    });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({
      success: false,
      message: "Error fetching orders for user email",
      error: errorMessage,
    });
  }
};
