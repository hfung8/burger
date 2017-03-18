var connection = require("./connection.js");

var ormObject = {
	selectAll: function(table,callback){
		var s = "SELECT * FROM " + table + ";";
		connection.query(s,function(err,result){
			if (err){
				throw err;
			}
			callback(result);
		});
	},
	create: function(tableInput,val,callback){
		var s = "INSERT INTO " + tableInput + " (burger_name) VALUES ('"+val+"');";
		connection.query(s,function(err,result){
				if (err){
				throw err;
			}
			callback(result);
		});
	},
	updateOne: function(tableInput,condition,callback){
		var s = "UPDATE " + tableInput + " SET devoured=true WHERE id ="+condition+";";
		connection.query(s, function(err,result){
				if (err){
				throw err;
			}
			callback(result);
		})
	}
};

module.exports = ormObject;