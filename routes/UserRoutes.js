import express from "express";
import { changeAddress, changeEmail, changeNumber, changePanCardNum, register, updateUser } from "../controller/UserControllers.js";
import { addProduct } from "../controller/ProductController.js";
import { login } from "../controller/UserControllers.js";
import {getAllProducts} from "../controller/ProductController.js"
import { checkEmail, checkName, checkPin } from "../middlewares/authmiddleware.js";
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
router.post('/changeNumber',checkPin,changeNumber);
router.post('/changeEmail',checkPin,changeEmail);
router.post('/changeAddress',checkPin,changeAddress);
router.post('/changePanCardNum',checkPin,changePanCardNum);


export default router;