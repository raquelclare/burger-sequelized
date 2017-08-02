// ===== DEPENDENCIES =====
var mysql = require("mysql");

// Set up MySQL connection
var connection;
// var connection = mysql.createConnection({
// 	port: 8889,
// 	host: "localhost", 
// 	user: "root", 
// 	password: "root", 
// 	database: "burgers_seq_db"
// });

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 8889,
		host: "localhost",
		user: "root",
		password: "root",
		database: "burgers_seq_db"
	});
};

// Make a connection
connection.connect(function(err) {
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;