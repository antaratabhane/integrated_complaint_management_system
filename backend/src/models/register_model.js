let mongoose = require("mongoose");

let loginSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    contact: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Register", loginSchema);