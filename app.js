const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/continents", (req, res) => {
  res.send({
    continents: [
      "Asia",
      "Africa",
      "Europe",
      "North America",
      "South America",
      "Antarctica",
      "Australia",
    ],
  });
});

const countriesList = [
  { country: "France", language: "French", id: 1 },
  { country: "Spain", language: "Spain", id: 2 },
];

app.get("/countries/:id", (req, res) => {
  const id = Number(req.params.id);
  const country = countriesList.find((x) => x.id === id);

  res.send(country);
});

module.exports = app;
