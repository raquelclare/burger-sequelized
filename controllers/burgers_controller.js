// ====== DEPENDENCIES =========================
// Node dependencies
var express = require("express");
var router = express.Router();

// Importing the models directory
var db = require("../models");

// Extracts the sequelize connection from the models object
var sequelizeConnection = db.sequelize;

sequelizeConnection.sync({ force: true });

// Thie file offers a set of routes for displaying and saving data to the db
// Create all of our routes and set up logic within those routes where required
// Routes
// GET route
router.get("/", function(req, res) {
	// findAll returns all entries for a table (bugers) when used with no options
	db.Burger.findAll({}).then(function(dbBurger) {

		var burgerObj = {
			burgers: dbBurger
		};
		// We have access to the burgers as an argument inside of the callback function.
		res.render("index", burgerObj);
	});
});

// POST route to making/saving a new Burger
router.post("/", function(req, res) {
	// Create takes an argument of an object describing the item/burger we want to insert into our table. In this case we want to pass an object with the burger name and devoured property.
	db.Burger.create({
		burger_name: req.body.burger_name,
		devoured: req.body.devoured
	}).then(function(dbBurger){
		// We have access to the burgers as an argument inside of the callback function.
		res.redirect("/");
	});
});

// PUT route for updating a burger's devoured status
router.put("/:id", function(req, res) {
	// Update takes in 2 arguments, an object describing the properties we want to update, and a "where" object describing the Burger we want to update
	db.Burger.update({
		devoured: req.body.devoured
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(dbBurger) {
		// We have access to the burgers as an argument inside of the callback function.
		res.redirect("/");
	});
});

module.exports = router;