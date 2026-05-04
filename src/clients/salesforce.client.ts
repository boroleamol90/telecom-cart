// src/clients/salesforce.client.ts
import { Cart } from "../types/cart.types";
import crypto from "crypto";

export class SalesforceCartClient {
  private carts = new Map<string, Cart>();

  createCart(): Cart {
    const cartId = crypto.randomUUID();
    const cart = { cartId, items: [] };
    this.carts.set(cartId, cart);
    return cart;
  }

  getCart(cartId: string): Cart | undefined {
    return this.carts.get(cartId);
  }

  addItem(cartId: string, item: any) {
    const cart = this.carts.get(cartId);
    if (!cart) throw new Error("CART_NOT_FOUND");
    cart.items.push(item);
  }

  removeItem(cartId: string, productId: string) {
    const cart = this.carts.get(cartId);
    if (!cart) throw new Error("CART_NOT_FOUND");
    cart.items = cart.items.filter(i => i.productId !== productId);
  }
}