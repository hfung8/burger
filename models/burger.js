var ormObject = require("../config/orm.js");


var burger = {
	selectBurgers : function(callback){
		ormObject.selectAll("burgers", function(result){
		callback(result);
		})	
	},
	addBurger : function(name,callback){
		ormObject.create("burgers",name,callback, function(result){
		callback(result);
		})
	},
	updateBurger : function(id,callback){
		ormObject.updateOne("burgers",id,callback, function(result){
		callback(result);
		})
	}
};

module.exports = burger;