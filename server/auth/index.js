const router = require("express").Router();
const { Order } = require("../db/models");
const User = require("../db/models/user");
module.exports = router;

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      console.log("No such user found:", req.body.email);
      res.status(401).send("Wrong username and/or password");
    } else if (!user.correctPassword(req.body.password)) {
      console.log("Incorrect password for user:", req.body.email);
      res.status(401).send("Wrong username and/or password");
    } else {
      const pendingOrder = await Order.findOne({
        where: { status: "pending" },
      });
      user.pendingOrderId = pendingOrder.id;
      req.login(user, (err) => {
        return err ? next(err) : res.json(user);
      });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const pendingOrder = await Order.create({
      userId: user.id,
      status: "pending",
    });
    user.pendingOrderId = pendingOrder.id;
    req.login(user, (err) => (err ? next(err) : res.json(user)));
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.post("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

router.get("/me", async (req, res) => {
  res.json(req.user);
});