var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection({
    host: "localhost",
  user: "Brian",
  password: "Hefty131!",
  database: "burgers_db",
  port: "3306"
  });
}


connection.connect();

module.exports = connection;
