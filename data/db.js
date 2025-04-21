const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  waitForConnections: true,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Errore di connessione:", err);
  } else {
    console.log("Connessione riuscita");
    connection.release();
  }
});

module.exports = pool;
