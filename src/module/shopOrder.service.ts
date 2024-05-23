// src/services/order.service.ts
import { Order } from "./shopOrder.model";
import { IOrder } from "./shopOrder.interface";

const createOrder = async (orderData: IOrder) => {
  const order = new Order(orderData);
  return await order.save();
};

const getAllOrders = async () => {
  return await Order.find({});
};

const getOrdersByEmail = async (email: string) => {
  return await Order.find({ email });
};

export const orderServices = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};
