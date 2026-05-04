// src/routes/cart.routes.ts
import express from "express";
import { CartController } from "../controllers/cart.controller";

export const cartRoutes = (controller: CartController) => {
  const router = express.Router();

  router.post("/", controller.createCart);
  router.get("/:sessionId", controller.getCart);
  router.post("/:sessionId/items", controller.addItem);
  router.delete("/:sessionId/items/:productId", controller.removeItem);

  return router;
};