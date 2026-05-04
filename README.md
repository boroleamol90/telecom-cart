# Telecom Cart Experience API

## 📌 Overview
This project implements a thin Experience API (BFF) for a telecom cart system.

It sits on top of a non-persistent Salesforce cart context and provides:
- Cart session management
- Item operations (add/remove)
- Expiry handling (TTL-based)

No database is used. All data is stored in memory.

---

## 🛠 Tech Stack
- Node.js (v20+)
- TypeScript
- Express
- Jest (unit testing)

---

## 🚀 Setup Instructions

```bash
# Clone repo
git clone https://github.com/boroleamol90/telecom-cart.git

cd telecom-cart-api

# Install dependencies
npm install