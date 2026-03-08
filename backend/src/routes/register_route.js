let express = require("express");
let Register = require("../controllers/register_controller");

let register_router = express.Router();

register_router.post("/", Register);

module.exports = register_router;