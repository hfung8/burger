var ormObject = require("../config/orm.js");


var burger = {
	selectBurgers : function(callback){
		ormObject.selectAll("burgers", function(result){
		callback(result);
		})	
	},
	addBurger : function(name,callback){
		ormObject.insertOne(name,callback, function(result){
		callback(result);
		})
	},
	updateBurger : function(newBurger,idInput,callback){
		ormObject.updateOne(newBurger,idInput,callback, function(result){
		callback(result);
		})
	},
	deleteBurger : function(name,idInput,callback){
		ormObject.deleteOne(name,idInput,callback, function(result){
			callback(result);
		})
	}
};

module.exports = burger;

