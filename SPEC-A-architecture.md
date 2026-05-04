1. Purpose
This service provides a thin Experience API (BFF) for a telecom cart system. 
It abstracts a non-persistent Salesforce cart context and exposes stable APIs 
to clients while handling cart lifecycle, expiry, and session continuity.
2. High-Level Architecture
Layers:

1. API Layer (Express/Fastify)
2. Service Layer (CartService)
3. Client Layer (SalesforceCartClient - test double)
4. Store Layer (In-memory session store)

Principles:
- Stateless API layer
- Business logic in services
- External dependency abstracted via interface
3. Core Components
CartService

Responsibilities:

Create cart session
Add/remove items
Fetch cart
Handle expiration
SalesforceCartClient (Test Double)

Responsibilities:

Simulate Salesforce cart behavior
Generate cartId
Expire cart after TTL (e.g., 5 minutes)
Session Store (In-Memory)
type CartSession = {
  sessionId: string;
  cartId: string;
  expiresAt: number;
};
4. Expiry Strategy
- Each cart has TTL (e.g., 5 minutes)
- On every request:
  - Check expiry
  - If expired → recreate cart
5. Error Handling
Errors:
- CART_EXPIRED
- CART_NOT_FOUND
- INVALID_INPUT

Return structured errors:
{
  code: string,
  message: string
}
