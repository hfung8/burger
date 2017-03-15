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
	insertOne: function(name,callback){
		var s = "INSERT INTO burgers (burger_name) VALUES ('"+ name +"');";
		connection.query(s,function(err,result){
				if (err){
				throw err;
			}
			callback(result);
		});
	},
	updateOne: function(newBurger,idInput,callback){
		var s = "UPDATE burgers SET burger_name = '" + newBurger + "' WHERE id = ?;";
		connection.query(s,[idInput], function(err,result){
				if (err){
				throw err;
			}
			callback(result);
		})
	},
	deleteOne: function(name,idInput,callback){
		var s = "DELETE FROM burgers '" + name + "'WHERE id = ?;";
		connection.query(s,[idInput], function(err,result){
			if (err){
				throw err;
			}
			callback(result);
		})
	}
};

module.exports = ormObject;