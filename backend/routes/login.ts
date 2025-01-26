const { Router } = require("express");

const router = Router();
const middleware = require("../middleware");

router.get("/", middleware, (req, res) => {
  res.json({ message: "Events route" });
});

module.exports = router;
