var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req,res){
	burger.selectBurgers(function(data){
		var hdbsObject = {
			burgers: data
		};
		res.render("/", hdbsObject);
	});
});

router.post("/addburger", function(req,res){
	var burgerType = req.body.burgerType;
	burger.addBurger(burgerType,function(){
		res.redirect("/");
	});
});

router.put("/:id", function(req,res){
	var condition = "id = " + req.params.id;
	console.log("condition," + condition);
	burger.updateBurger(condition,function(){
		res.redirect("/");
	});
});

router.delete("/:id", function(req,res){
	var condition = "id = " + req.params.id;
	burger.deleteBurger(condition, function(){
		res.redirect("/");
	});
});

// router.post("/index", function(req,res){
// 	burger.updateBurger([
// 		"Bacon Cheeseburger"], [
// 		req.body.name], function(){
// 			res.redirect("/");
// 		});
// });

module.exports = router;