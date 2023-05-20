import express from "express";
import { login, register } from "../controller/UserControllers.js";
import { addProduct } from "../controller/ProductController.js";

const router = express.Router();


router.get('/login',login)
router.get('/register', register);
router.post('/add-product', addProduct)

export default router;