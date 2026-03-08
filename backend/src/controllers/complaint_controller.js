let complaint_schema = require("../models/conplaint_model");

let complaint = async(req, res) =>{
    let {catagory, description} = req.body;
    console.log(req.body);
    let newModel = new complaint_schema({
        user: req.session.userId, 
        catagory,
        description
    })

    try {
        await newModel.save();
        res.redirect("/home");
    } catch (error) {
        res.status(500).json({"message": "Something went wrong!"})
    }
}

let getComplaints = async (req, res) => {
  try {
    let data = await complaint_schema.find().populate("user", "username address");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch data" });
  }
};



module.exports = {complaint, getComplaints};