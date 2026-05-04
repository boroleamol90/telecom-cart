// src/services/cart.service.ts
import crypto from "crypto";
import { SalesforceCartClient } from "../clients/salesforce.client";
import { sessionStore } from "../store/session.store";

const TTL = 5 * 60 * 1000;

export class CartService {
  constructor(private client: SalesforceCartClient) {}

  createCart() {
    const cart = this.client.createCart();
    const sessionId = crypto.randomUUID();

    const session = {
      sessionId,
      cartId: cart.cartId,
      expiresAt: Date.now() + TTL,
    };

    sessionStore.set(sessionId, session);
    return session;
  }

  private validateSession(sessionId: string) {
    const session = sessionStore.get(sessionId);
    if (!session) throw new Error("CART_NOT_FOUND");

    if (Date.now() > session.expiresAt) {
      sessionStore.delete(sessionId);
      throw new Error("CART_EXPIRED");
    }

    return session;
  }

  getCart(sessionId: string) {
    const session = this.validateSession(sessionId);
    const cart = this.client.getCart(session.cartId);
    return { ...cart, expiresAt: session.expiresAt };
  }

  addItem(sessionId: string, item:any) {
    const session = this.validateSession(sessionId);
    this.client.addItem(session.cartId, item);
  }

  removeItem(sessionId: string, productId: string) {
    const session = this.validateSession(sessionId);
    this.client.removeItem(session.cartId, productId);
  }
}