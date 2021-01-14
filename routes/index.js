const express = require("express");
const router = express.Router();
const drinkController = require("../controllers/drinkController");
const userController = require("../controllers/userController");
const drinkServices = require("../Services/drinkServices");
const userServices = require("../Services/userServices");
const drinkIntanceController = new drinkController(new drinkServices());
const userIntanceController = new userController(
  new userServices(),
  new drinkServices()
);
// rutas drinks
router.delete("/deletedrinks/:id", (req, res, next) => {
  drinkIntanceController.deleteDrink(req, res);
});
router.put("/updatedrinks/:id", (req, res, next) => {
  drinkIntanceController.updateDrink(req, res);
});
router.post("/postdrinks", (req, res, next) => {
  drinkIntanceController.postDrink(req, res);
});
router.get("/drinks", (req, res, next) => {
  drinkIntanceController.getDrink(req, res);
});
// rutas users
router.delete("/deleteusers/:id", (req, res, next) => {
  userIntanceController.deleteUser(req, res);
});
router.put("/updateusers/:id", (req, res, next) => {
  userIntanceController.updateUser(req, res);
});
router.post("/postusers", (req, res, next) => {
  userIntanceController.postUser(req, res);
});
router.get("/users/:name", (req, res, next) => {
  userIntanceController.getUserByName(req, res);
});
router.get("/users", function (req, res, next) {
  userIntanceController.getUser(req, res);
});
router.get("/", (req, res, next) => {
  res.send("welcome to the api");
});

module.exports = router;
