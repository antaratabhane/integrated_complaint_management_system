let mongoose = require("mongoose");

let loginSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: "user"
    }
});

module.exports = mongoose.model("login", loginSchema);