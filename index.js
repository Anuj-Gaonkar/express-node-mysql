const express = require('express');
const mysql = require('mysql');
// Testing

const app = express();
const port = 3000;

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test',
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL');
});

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});