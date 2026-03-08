let loginSchema = require("../models/login_model");

let login = async(req, res) => {
    let {username, password} = req.body;
    try {
        let result = await loginSchema.findOne({username, password});
        req.session.role = result.role;
        if (result.role === "admin") {
            res.redirect("/admin");
        } else {
            res.redirect("/home");
        }
    } catch (error) {
        res.status(404).json({"message": "User does not exists go to register page!"});
        console.log("User does not exists!");
    }
}

module.exports = login;