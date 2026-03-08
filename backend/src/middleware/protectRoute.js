let checkAdmin = (req, res, next) => {
  if (req.session.role === "admin") next();
  else res.status(403).send("Access denied");
};

module.exports = checkAdmin;
