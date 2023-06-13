import Users from "../modals/User.js";

export const login = async (req, res) => {
    try {
        const { userEmail, userPassword} = req.body;
        if (!userEmail) return req.send("User Email is required!");
        if (!userPassword) return req.send("User Password is required")
        const response = await Users.find({ email: userEmail }) .exec();

        if(response.length) {
            if(userPassword === response[0].password) {
                return res.send ("You are logged in")
            }else {
                return res.send("Wrong Password")
            }
        } else {
            return res.send("User not found check our Email")
        }
    }catch (error) {
        return res.send(error)
    }
}

// export const register = (req, res) => {
//     return res.send("Hi from Register....")
// }

export const register = async (req, res) => {
    try {
        const { Name, Email, Password, Pin, Number, Address, Pancard } = req.body;
        if (!Name) return res.send("User name is requierd!");
        if (!Email) return res.send("User email is required!")
        if (!Password) return res.send("User Password is required!")
        if (!Pin) return res.send("User Pin is required!")
        if (!Number) return res.send("User Number is required!")
        if (!Address) return res.send("User Address is required!")
        if (!Pancard) return res.send("User Pancard is required!")
        
        const response = await Users.find({ email: Email}).exec();
        if(response.length) return res.send("Email already present");

        let secretkey = "naval";
        let plaintextForPassword = Password;
        let plaintextForPin = Pin;

        const ciphertextForPassword = encrypt.encrypt(plaintextForPassword, secretkey, 256);
        const ciphertextForPin = encrypt.encrypt(plaintextForPin, secretkey, 256);
        
        
        const user = new Users({
            name: Name,
            email: Email,
            password: ciphertextForPassword,
            pin: ciphertextForPin,
            number: Number,
            address: Address,
            pancard: Pancard
        });
        await user.save();
        return res.send("Resgistration Succesfull!")
    } catch (error) {
        return res.send(error);
    }
}


export const updateUser = async (req, res) => {
    try {
        const {email, name} = req.body;
        if (!email) return res.send("Email not found!")
        if (!name) return res.send ("Name not found!")
        const response = await Users.findOneAndUpdate({ email }, { name }).exec();
        res.send(response);
    } catch {
        res.send(error)
    }
}
