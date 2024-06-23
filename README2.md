Step 1: Install MSSQL Server
Step 2: Run SQL Server in Docker
* Pull the SQL Server Docker Image: Open a terminal and run:
// docker pull mcr.microsoft.com/mssql/server:2022-latest

* Run the SQL Server Container: Start an instance of the Docker image you just pulled:
// docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=StrongPW2024(!)' -p 1433:1433 --name sqlserver -d --platform linux/amd64 mcr.microsoft.com/mssql/server:2022-latest



------------------------------------------------------------------------------
mkdir my-react-app
cd my-react-app
npm init -y

npm install react react-dom

npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin


Create Project Structure
my-react-app
├── public
│   └── index.html
├── src
│   ├── App.js
│   └── index.js
├── .babelrc
├── package.json
└── webpack.config.js

