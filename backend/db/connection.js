const mongoose = require("mongoose");
// put your mongodb url! and then enter into admins panel and then create events, and also register!
mongoose
  .connect(
   // put your databse
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`Connectio is succesful in mongoose`);
  })
  .catch((e) => {
    console.log(e + "no connection");
  });
