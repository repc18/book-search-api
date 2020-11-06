// File for database connection
const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');

// Establish a connection with the remote database
const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    port: dbConfig.port,
    database: dbConfig.database
});

// Open the MySql connection
connection.connect(error => {
    if (error) throw error;
    console.log("You are connected!");
});

module.exports = connection;