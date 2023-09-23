const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'analytics_user',
  password: 'test',
  database: 'analytics_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

module.exports = db;