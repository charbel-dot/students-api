const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send("Welcome to my own api!");
});

app.get("/getStudents", (req, res) => {
  res.send(data);
});

app.post("/login", (req, res) => {
  let _username = req.body.username;
  let _password = req.body.password;

  if (_username == "charbel" && _password == 123) {
    res.status(200).send("Success");
  } else {
    res.status(403).send("Unauthorized");
  }
  console.log(_username, _password);
});

app.listen(PORT);
