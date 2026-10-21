let mongoose = require("mongoose");

let complaintShema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "login" },
    category: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("complain", complaintShema);