const mysql = require("mysql2");
// Creating the connnection to mysql 
const db = mysql.createPool({
    host:"database-1.cuhlqsukpy3z.us-east-1.rds.amazonaws.com",
    port:"3306",
    user:"admin",
    password:"645password",
    database:"MyDb",
});

module.exports = db.promise()



