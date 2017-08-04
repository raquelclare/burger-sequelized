// Thie file offers a set of routes for displaying and saving data to the db

// Dependencies
// Requiring models
var db = require("../models");

// Routes
module.exports = function(app) {
	// GET route
	app.get("/api/burgers", function(req, res) {
		// findAll returns all entries for a table when used with no options
		db.Burger.findAll({}).then(function(dbBurger) {
			// We have access to the burgers as an argument inside of the callback function.
			res.json(dbBurger);
		});
	});

	// POST route to making/saving a new Burger
	app.post("/api/burgers", function(req, res) {
		// Create takes an argument of an object describing the item/burger we want to insert into our table. In this case we want to pass an object with the burger name and devoured property.
		db.Burger.create({
			burger_name: req.body.burger_name,
			devoured: req.body.devoured
		}).then(function(dbBurger){
			// We have access to the burgers as an argument inside of the callback function.
			res.json(dbBurger);
		});
	});

	// PUT route for updating a burger's devoured status
	app.put("/api/burgers", function(req, res) {
		// Update takes in 2 arguments, an object describing the properties we want to update, and a "where" object describing the Burger we want to update
		db.Burger.update({
			devoured: req.body.devoured
		}, {
			where: {
				id: req.body.id
			}
		}).then(function(dbBurger) {
			// We have access to the burgers as an argument inside of the callback function.
			res.json(dbBurger);
		});
	});
};