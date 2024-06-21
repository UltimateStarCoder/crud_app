const express = require('express');
const mysql = require('mysql');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

const db = mysql.createConnection({
    host: 'localhost',
});
const port = 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});