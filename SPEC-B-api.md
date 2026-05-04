1. Create Cart
POST /api/cart

Response:

{
  "sessionId": "string",
  "cartId": "string",
  "expiresAt": number
}
2. Get Cart
GET /api/cart/:sessionId

Response:

{
  "cartId": "string",
  "items": [
    {
      "productId": "string",
      "quantity": number
    }
  ],
  "expiresAt": number
}
3. Add Item
POST /api/cart/:sessionId/items

Request:

{
  "productId": "string",
  "quantity": number
}
4. Remove Item
DELETE /api/cart/:sessionId/items/:productId
5. Error Response
{
  "error": {
    "code": "CART_EXPIRED",
    "message": "Cart session expired"
  }
}