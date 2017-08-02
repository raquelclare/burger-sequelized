var express = require("express");

var router = express.Router();

// Importing the model (burger.js) to use its databas functions
var burger = require("../models/burger.js");

// Create all of our routes and set up logic within those routes where required
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
	var hbsObject = {
		burgers: data
	};
	// console.log(hbsObject);
	res.render("index", hbsObject);
	});
});

router.post("/", function(req, res) {
	burger.insertOne(
		["burger_name", "devoured"], 

		[req.body.burger_name, req.body.devoured], 

		function() {
			res.redirect("/");
		});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	// console.log("condition", condition);

	burger.updateOne({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect("/");
	});
});

// Exporting routes for our sever.js file to use
module.exports = router;