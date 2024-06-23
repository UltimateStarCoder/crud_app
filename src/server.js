const sql = require('mssql');

//mssql database config
const config = {
  user: 'sqlserver',
  password: 'StrongPW2024(!)',
  database: 'crudDatabase',
  /*
  options : {
    encrypt: true,
    trustedServerConnection: true
  }
    */
}

async function createUser(newLogin, newUser, newPassword, crudDatabase) {
  try {
    // Connect to the database
    await sql.connect(config);
    console.log('Connected to the database');

    // Create a new user
    await sql.query`CREATE LOGIN ${newLogin} WITH PASSWORD = '${newPassword}'`;
    await sql.query `USE ${crudDatabase}`
    await sql.query`CREATE USER ${newUser} FOR LOGIN ${newLogin}`;

    console.log('User created successfully');
    }
  catch (err) {
    console.error('Failed to create user',err);
  }
};

createUser();
