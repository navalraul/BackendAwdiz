import express from "express";
import { register, updateUser } from "../controller/UserControllers.js";
import { addProduct } from "../controller/ProductController.js";
import { login } from "../controller/UserControllers.js";
import {getAllProducts} from "../controller/ProductController.js"
import { checkEmail } from "../middlewares/authmiddleware.js";
const router = express.Router();


router.post('/login', login)
router.post('/register', register);
router.post('/add-product', addProduct)
router.get('/get-all-products',getAllProducts)
router.post ('/update-user', checkEmail,updateUser);


export default router;