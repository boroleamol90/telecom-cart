// src/controllers/cart.controller.ts
import { Request, Response } from "express";
import { CartService } from "../services/cart.service";

export class CartController {
  constructor(private service: CartService) {}

  createCart = (req: Request, res: Response) => {
    const result = this.service.createCart();
    res.json(result);
  };

  getCart = (req: Request, res: Response) => {
    const sessionId = req.params.sessionId as string;
    const data = this.service.getCart(sessionId);
    res.json(data);
  };

  addItem = (req: Request, res: Response) => {
    const sessionId = req.params.sessionId as string;
    this.service.addItem(sessionId, req.body);
    res.json({ success: true });
  };

  removeItem = (req: Request, res: Response) => {
    const sessionId = req.params.sessionId as string;
    const productId = req.params.productId as string;
    this.service.removeItem(sessionId, productId);
    res.json({ success: true });
  };
}