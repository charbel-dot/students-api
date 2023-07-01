const express = require("express");
const cors = require("cors");
const xlsx = require("xlsx");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// File
const filePath = "./data/user-data-api.xlsx";
const file = xlsx.readFile(filePath);

// Getting Sheets then converting to JSON
const wb = file.Sheets["Clients"];
const ws = xlsx.utils.sheet_to_json(wb);

app.get("/", (req, res) => {
  res.send("Welcome to Students API!");
});

app.get("/getStudents", (req, res) => {
  res.send(ws);
});

app.listen(PORT);
