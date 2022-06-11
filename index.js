const express = require("express");
const { Client } = require("pg");
const app = express();

  const client = new Client({
  user: "yrntvcdjivsjqb",
  host: "ec2-52-21-111-28.compute-1.amazonaws.com",
  database: "dd4ll91o52gqhb",
  password: "f27a2fed94bafd41321e92fe1933cd36bac409463456c9badff1c620e53d4465",
  port: 5432,
  ssl: true
});

client.connect();

client.query('Select now()',(err, res)=>
{
  if (!err) {
    console.log(res.rows);
  }
  else {
    console.log(err.message)
  }
})


app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  res.send("<html> <head><h1>Free Test</h></head><body><h2> This page was render direcly from the server <p>Hello there welcome to my website</p></h2></body></html>");
});