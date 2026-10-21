if (process.env.NODE_ENV !== "production") {
  process.loadEnvFile();
}
let express = require("express");
let app = express();
let path = require("path")
let mongoose = require("mongoose");
let register_route = require("./routes/register_route");
let login_route = require("./routes/login_route");
let rbac = require("./middleware/protectRoute");
let complaint_route = require("./routes/user_complaint");
const session = require("express-session");
app.use(session({
  secret: "mysecret",
  resave: false,
  saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/register", register_route);
app.use("/login", login_route);
app.get("/rgt", (req, res) => {
  console.log("Request received for /rgt");
  const fullPath = path.join(__dirname, "../../frontend/register.html");
  console.log("Sending file:", fullPath); 
  res.sendFile(fullPath);
});

app.get("/upload_image", (req, res) => {
  console.log("Request received for /rgt");
  const fullPath = path.join(__dirname, "../../frontend/image_detection.html");
  console.log("Sending file:", fullPath); 
  res.sendFile(fullPath);
});

app.get("/home_page", (req, res) => {
  console.log("Request received for /rgt");
  const fullPath = path.join(__dirname, "../../frontend/home_page.html");
  console.log("Sending file:", fullPath); 
  res.sendFile(fullPath);
});

app.get("/register", (req, res) => {
  console.log("Request received for /rgt");
  const fullPath = path.join(__dirname, "../../frontend/register.html");
  console.log("Sending file:", fullPath); 
  res.sendFile(fullPath);
});

app.get("/login_page", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/login.html"));
});

app.get("/", (req, res) =>{
  res.sendFile(path.join(__dirname, "../../frontend/home.html"));
});

app.get("/admin", rbac, (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/admin_page.html"));
});
app.use("/get_complaint", complaint_route);


app.use("/complaint", complaint_route)

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Database Connected");
})
.catch((err) => {
    console.error("Database connection failed:", err);
});

module.exports = app;
