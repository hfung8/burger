var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req,res){
	burger.selectBurgers(function(burger_data){
		console.log(burger_data)
		res.render("index", {burger_data});
	});
});

router.post("/burgers/create", function(req,res){
	burger.addBurger(req.body.burger_name,function(result){
		res.redirect("/");
	});
});

router.put("/burgers/update", function(req,res){
	burger.updateBurger(req.body.burger_id, function(result){
		console.log(result);
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