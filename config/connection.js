var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Maverick7$",
    database: "karma_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("Connection Error" + err.stack);
        return;
    }
    console.log('Connected as id : ' + connection.threadId)
});

module.exports = connection;