let express = require("express");
let login = require("../controllers/login_controller");
let router = express.Router();

router.post("/", login);

module.exports = router;