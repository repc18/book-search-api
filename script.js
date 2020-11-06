const mysql = require('mysql');
const con = mysql.createConnection({
    host: "140.118.109.225",
    user: "isfws",
    password: "homework",
    port: "3306",
    database: "awt"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("You are connected!");
});

con.query('SELECT * from books', function(err, results, fields) {
    if (err) throw err;
    console.log('The solution is: ', results);
});

con.end();