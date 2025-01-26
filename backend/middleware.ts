const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log("Middleware");
  try {
    // we will check the local storage and if the user exists then we will allow the user to access the routes
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, "secret");
    req.userData = decoded;
    if (decoded.role !== "admin") {
      return res.status(401).json({ message: "Auth failed!" });
    } else {
      console.log("Admin user");
      next();
    }
    console.log("decoded", decoded);
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};
