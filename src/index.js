const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// MSSQL database configuration
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true, // Use this if you're on Windows Azure
        trustServerCertificate: true // Change to true for local dev / self-signed certs
    }
};

// Connect to MSSQL
sql.connect(dbConfig).then(pool => {
    if (pool.connected) {
        console.log('Connected to MSSQL database');
    }

    // Simple route to fetch data
    app.get('/data', async (req, res) => {
        try {
            const result = await pool.request().query('SELECT * FROM your_table_name');
            res.json(result.recordset);
        } catch (err) {
            res.status(500).send('Database query failed');
        }
    });

}).catch(err => {
    console.error('Database connection failed:', err);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});