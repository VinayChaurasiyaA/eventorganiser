const mongoose = require("mongoose");

// MongoDB connection URL
const mongoURL = "your-mongodb-connection-url-here"; // Replace with your actual MongoDB URL

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection is successful in mongoose");
  })
  .catch((error) => {
    console.error("No connection. Error:", error);
  });
