export type CartItem = {
  productId: string;
  quantity: number;
};

export type Cart = {
  cartId: string;
  items: CartItem[];
};

export type CartSession = {
  sessionId: string;
  cartId: string;
  expiresAt: number;
};