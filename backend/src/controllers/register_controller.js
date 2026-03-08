let Login = require("../models/register_model");

let Register = async(req, res) =>{
    let {username, email, contact, password, address} = req.body;
    let newModel = Login({
        username,
        email,
        contact,
        password,
        address
    })

    try {
        let user = await newModel.save();
        req.session.userId = user._id;
        res.redirect("/login_page");
    } catch (error) {
        res.status(500).json({"message": "Something went wrong!"})
    }
}

module.exports = Register;