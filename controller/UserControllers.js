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
        const { name, email, password, pin, number, address, panCard } = req.body;

        var secretkey = 'ios';
        var plainPin = pin;
        var plaintext = password;
        var cipherText = encrypt.encrypt(plaintext, secretkey, 256);
        var cipherPin = encrypt.encrypt(plainPin, secretkey, 256);
        const user = new Users({ name, email, password: cipherText, pin: cipherPin, number, address, panCard })
        await user.save();
        return res.send("Resgistration Succesfull!")

    } catch (error) {
        return res.send(error)
    }
}

export const updateUser = async (req, res) => {
    try {
        const { email, name } = req.body;
        if (!email) return res.send("Email not found!")
        if (!name) return res.send("Name not found!")
        const response = await Users.find({ email }).exec();
        console.log(response);
        if (response) {
            // const res = await Users.updateOne({ email }, { $set: { name: name } });
            const user = await Users.findOneAndUpdate({ email }, { name: name  }).exec();
            await user.save();
            return res.send("record updated")
            // return res.send(response[0])
        } else {
            return res.send("User not found!")
        }
    } catch (error) {
        return res.send(error)
    }
}

export const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.send("Email not found!")
        const response = await Users.find({ email }).exec();
        if (response) {
            return res.send(response[0])
        } else {
            return res.send("User not found!")
        }
    } catch (error) {
        return res.send(error)
    }
}

export const changeNumber = async (req, res) => {
    try {
        const { number ,id,pin} = req.body;
        if(!number) return res.send("number is required.")
        const changeNum = await Users.findByIdAndUpdate({ _id: id, pin }, { number });
        await changeNum.save();
        return res.send("number changed.")



    } catch (error) {

        return res.send(error, "error here")
    }
}

export const changeEmail = async (req, res) => {
    try {
        const { email ,id,pin} = req.body;
        if(!email) return res.send("email is required.")
        const changeEmail = await Users.findByIdAndUpdate({ _id: id, pin }, { email });
        await changeEmail.save();
        return res.send("email changed.")



    } catch (error) {

        return res.send(error, "error here")
    }
}

export const changeAddress = async (req, res) => {
    try {
        const { address ,id,pin} = req.body;
        if(!address) return res.send("Address is required.")
        const changeAddress = await Users.findByIdAndUpdate({ _id: id, pin }, { address });
        await changeAddress.save();
        return res.send("Address changed.")



    } catch (error) {

        return res.send(error, "error here")
    }
}

export const changePanCardNum = async (req, res) => {
    try {
        const { panCard ,id,pin} = req.body;
        if(!panCard) return res.send("Pan card number is required.")
        const changePanCardNum = await Users.findByIdAndUpdate({ _id: id, pin }, { panCard });
        await changePanCardNum.save();
        return res.send("Pan card number changed.")



    } catch (error) {

        return res.send(error, "error here")
    }
}
