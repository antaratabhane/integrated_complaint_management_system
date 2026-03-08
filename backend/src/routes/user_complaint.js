let express = require("express");
let {complaint, getComplaints} = require("../controllers/complaint_controller");

let router = express.Router();

router.post("/", complaint);
router.get("/", getComplaints);

module.exports = router;
