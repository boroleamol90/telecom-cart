// src/app.ts
import express from "express";
import { SalesforceCartClient } from "./clients/salesforce.client";
import { CartService } from "./services/cart.service";
import { CartController } from "./controllers/cart.controller";
import { cartRoutes } from "./routes/cart.routes";

const app = express();
app.use(express.json());

const client = new SalesforceCartClient();
const service = new CartService(client);
const controller = new CartController(service);

app.use("/api/cart", cartRoutes(controller));

app.listen(3000, () => console.log("Server running"));

export default app;