const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://vinay:password12345@cluster0.l6vllqy.mongodb.net/?retryWrites=true&w=majority" , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => {
    console.log(`Connectio is succesful in mongoose`)
})
.catch((e)=> {
  console.log(e + "no connection")  
})
