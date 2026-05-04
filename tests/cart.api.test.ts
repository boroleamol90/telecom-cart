// tests/cart.service.test.ts
import { CartService } from "../src/services/cart.service";
import { SalesforceCartClient } from "../src/clients/salesforce.client";

describe("CartService", () => {
  const service = new CartService(new SalesforceCartClient());

  it("should create cart", () => {
    const session = service.createCart();
    expect(session.sessionId).toBeDefined();
  });

  it("should add item", () => {
    const session = service.createCart();
    service.addItem(session.sessionId, { productId: "p1", quantity: 1 });

    const cart = service.getCart(session.sessionId);
    expect(cart.items?.length).toBe(1);
  });
});