let register = require("../models/register_model");

let Register = async(req, res) =>{
    let {username, email, contact, password, address} = req.body;
    let newModel = register({
        username,
        email,
        contact,
        password,
        address
    })

    try {
        let user = await newModel.save();
        req.session.userId = user._id;
        res.redirect("/login");
    } catch (error) {
        console.error("MongoDB Save Error:", error);
        res.status(500).send("Database error: Check your VS Code terminal for details.");
    }
}

module.exports = Register;