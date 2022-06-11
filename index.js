process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const express = require("express");
const { Client } = require("pg");
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware ();


app.use(bodyParser.urlencoded({ extended: false }));

 app.listen(process.env.PORT || 5000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/static/login.html');
});

app.post('/login', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send('Username: ${username} Password: ${password}');
});