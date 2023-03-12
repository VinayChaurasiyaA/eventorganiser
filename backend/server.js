const express = require("express");
const cors = require("cors");

require("./db/connection");

const Register = require("./models/registers");
const Events = require("./models/events");
const MoreEvents = require("./models/moreevents");
const UserEvent = require("./models/userEvents");

const router = express.Router();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors("*"));
app.use(express.urlencoded({ extended: true }));

let data;

app.post("/login", (req, res) => {
  try {
    const name = req.body.username;
    const password = req.body.password;
    console.log(`${name} and ${password}`);
    Register.findOne({ username: name }).then((result) => {
      if (result === null) {
        res.send({ message: "failed" });
      } else if (result.password === password) {
        data = { result };
        //  console.log(data);
        //  validation = "valid";
        res.send({ message: "success", result: result });
      } else {
        res.send({ message: "failed" });
      }
    });
  } catch (error) {
    res.status(400);
  }
});
app.get("/login", (req, res) => {
  res.json(data);
});
app.post("/register", (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    if (password === cpassword) {
      const studentRegistration = new Register({
        firstname: req.body.firstname,
        date: req.body.date,
        gender: req.body.gender,
        contact: req.body.contact,
        email: req.body.email,
        address: req.body.address,
        collegename: req.body.collegename,
        id: req.body.id,
        year: req.body.year,
        username: req.body.username,
        password: req.body.password,
        cpassword: cpassword,
      });
      const register = studentRegistration.save();

      res.status(200).send("ok"); // make index html wherr confettie is shown and registration is done
    } else {
      res.send("Password is not same");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/allevents", (req, res) => {
  try {
    Events.find({}).then((result) => {
      // console.log(result);
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/:id", (req, res) => {
  let id = req.params.id;
  //console.log(id);
  Events.find({ id: id }).then((result) => {
    console.log(result);
    res.send(result);
  });
  // res.send("I am reading paramerter" + req.params.id);
});
app.get("/more-events/:id", (req, res) => {
  let name = req.params.id;
  // console.log(req.params)
  MoreEvents.find({ category: name }).then((result) => {
    console.log(result);
    res.send(result);
  });
});
app.post("/event", (req, res) => {
  // const name = req.body[0].username;
  const eventname = req.body[0].selection;
  console.log(req.body[0]);
  const userEvents = new UserEvent({
    leader: req.body[0].Cname,
    username: req.body[0].username,
    category: eventname,
    collegeId: req.body[0].id,
    player1: req.body[0].player1,
    player2: req.body[0].player2,
    player3: req.body[0].player3,
    player4: req.body[0].player4,
    player5: req.body[0].player5,
  });
  const userEvent = userEvents.save();
  res.status(200).send("done");
});

app.get("/admin" , (req ,res )=> {
  console.log(UserEvent.find())
  UserEvent.find({}).then((result) => {
    console.group(result);
    res.send(result);
  }) 
})
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
