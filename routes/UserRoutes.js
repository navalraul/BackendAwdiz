import express from "express";
import { register, updateUser } from "../controller/UserControllers.js";
import { addProduct } from "../controller/ProductController.js";
import { login } from "../controller/UserControllers.js";
import {getAllProducts} from "../controller/ProductController.js"
import { checkEmail, checkName } from "../middlewares/authmiddleware.js";
import { otpCheckForRegister, otpCheckLogin, otpLogin, otpRegisteration} from "../controller/OtpController.js"

var router = express.Router();


router.post('/login', login)
router.post('/register', register);
router.post('/add-product', addProduct)
router.get('/get-all-products',getAllProducts)
router.post ('/update-user', checkEmail,checkName,updateUser);
router.post('/otp-register', otpRegisteration);
router.post('/otp-check-register', otpCheckForRegister);
router.post('/otp-login', otpLogin);
router.post('/otp-check-login', otpCheckLogin);


export default router;