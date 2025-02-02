const express = require("express");
const cors = require("cors");

require("./db/connection");

const Register = require("./models/registers");
const Events = require("./models/events");
const MoreEvents = require("./models/moreevents");
const UserEvent = require("./models/userEvents");
const Result = require("./models/result");

// create a controller and router for the events

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors("*"));
app.use(express.urlencoded({ extended: true }));

let data;
// TODO: how this all should look like
// below events would be coming from ./routes/events.js
// app.use(events);
app.delete("/event-remove/:id", (req, res) => {
  const ids = req.params.id;
  // console.log(ids);
  // res.send(ids);
  MoreEvents.findByIdAndDelete({ _id: ids }).then((result) => {
    console.log("done");
    res.send({ message: "Success", result: result });
  });
});

app.get("/all", (req, res) => {
  MoreEvents.find({}).then((result) => {
    console.log(result);
    res.send(result);
  });
});
app.post("/result", (req, res) => {
  console.log(req.body[0]);
  const result = new Result({
    eventname: req.body[0].eventname,
    firstwinner: req.body[0].firstwinner,
    secondwinner: req.body[0].secondwinner,
    thirdwinner: req.body[0].thirdwinner,
  });
  result.save();
  res.status(200).send("ok");
});
app.get("/result", (req, res) => {
  Result.find({}).then((result) => {
    console.log(result);
    res.send(result);
  });
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
app.get("/admin", (req, res) => {
  UserEvent.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Internal server error");
    });
  // res.send("Hello")
});
app.get("/:user", (req, res) => {
  try {
    let username = req.params.user;
    UserEvent.find({ username }).then((result) => {
      console.log(result);
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
});
app.post("/login", (req, res) => {
  try {
    const name = req.body.username;
    const password = req.body.password;
    // console.log(`${name} and ${password}`);
    Register.findOne({ username: name }).then((result) => {
      if (result === null) {
        res.send({ message: "failed" });
      } else if (result.password === password) {
        if (result.role === "Teacher") {
          res.send({ message: "success", result: result.role });
        } else if (result.role === "Admin") {
          res.send({ message: "success", result: result.role });
        } else {
          res.send({ message: "success", result: result });
        }
      } else {
        res.send({ message: "failed" });
      }
    });
  } catch (error) {
    res.status(400);
  }
});

app.post("/admineventmore", (req, res) => {
  console.log(req.body);
  try {
    const adminevent = new MoreEvents({
      eventname: req.body[0].category,
      category: req.body[0].eventname,
      description: req.body[0].description,
    });
    const moreEvents = adminevent.save();
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
  }
});

app.post("/adminevent", (req, res) => {
  try {
    const isNewEvent = Events.isThisPresent(req.body[0].eventname);
    if (!isNewEvent)
      return res.send({ success: false, message: "Already created" });
    const event = new Events({
      eventname: req.body[0].eventname,
      date: req.body[0].date,
      place: req.body[0].place,
      description: req.body[0].description,
    });
    event.save();
  } catch (error) {
    console.log(error);
  }
});

app.post("/register", (req, res) => {
  try {
    console.log(req.body);
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
        role: req.body.role,
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

app.get("/:id", (req, res) => {
  let id = req.params.id;
  //console.log(id);
  Events.find({ id: id }).then((result) => {
    // console.log(result);
    res.send(result);
  });
  // res.send("I am reading paramerter" + req.params.id);
});

app.get("/more-events/:id", (req, res) => {
  let name = req.params.id;
  // console.log(req.params)
  MoreEvents.find({ category: name }).then((result) => {
    // console.log(result);
    res.send(result);
  });
});
app.get("/login", (req, res) => {
  res.json(data);
});
app.post("/event", (req, res) => {
  // const name = req.body[0].username;
  const eventname = req.body[0].selection;
  // console.log(req.body[0]);
  const username = req.body[0].username;
  Register.findOne({ username: username }).then((result) => {
    console.log(result);
    if (result === null) {
      res.status(210).send("invalid username");
    } else {
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
    }
  });
  // console.log(check);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
