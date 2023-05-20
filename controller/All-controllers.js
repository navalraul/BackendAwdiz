export const Naval = (req,res) => {
    res.send("Sending message from Naval function")
}
export const Navnath = (req,res) => {
    try {
        throw new Error("I want to throw error...")
        // res.status(200).send("Sending message from Navnath function")
    }catch (error) {
        console.log(error,"-error")
    }
}
export const Raul = (req,res) => {
    res.send("Sending message from Raul function")
}
export const Code = (req,res) => {
    res.send("Sending message from Code function")
}


