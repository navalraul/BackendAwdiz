import mongoose from "mongoose";
import { Schema } from "mongoose";

const User = new Schema({
    name :  String,
    email : String,
    password : String,
    otp: String,
    number: Number,
    loginOtp: String,
});

export default mongoose.model("Users",User)