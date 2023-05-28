import express from "express";
import { register } from "../controller/UserControllers.js";
import { addProduct } from "../controller/ProductController.js";
import { login } from "../controller/UserControllers.js";
import {getAllProducts} from "../controller/ProductController.js"
const router = express.Router();


router.post('/login', login)
router.post('/register', register);
router.post('/add-product', addProduct)
router.get('/get-all-products',getAllProducts)

export default router;