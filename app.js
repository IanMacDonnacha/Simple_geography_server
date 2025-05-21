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

module.exports = app;
