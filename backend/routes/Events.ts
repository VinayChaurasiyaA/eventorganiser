const { Router } = require("express");
const router = Router();

// const events = require("./controllers/events")
// router.get("/events" , events.getEvents) controllers have a function name as getEvents

router.get("/", (req, res) => {
  res.json({ message: "Events route" });
});

module.exports = router;
