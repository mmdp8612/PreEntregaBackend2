import { Router } from "express";
import {
    products,
    productsById,
    cartProducts,
    realTimeProducts,
    chat
} from "../controllers/view.controller.js";

const router = Router();

router.get("/products", products);
router.get("/products/:pid", productsById);
router.get("/cart/:cid", cartProducts);
router.get("/realtimeproducts", realTimeProducts);
router.get("/chat", chat)

export default router;