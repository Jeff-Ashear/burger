const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "6tgKLIO94837", // cahnge this
    database: "burger_db" /// might wantt o change this too
});


connection.connect(function(err) {
    if (err) {
        console.error("Error, couldn't connect to database: " + err.stack);
        return;
    }    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;