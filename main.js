const express = require("express");
const app = express();
const sequelize = require("./database");

const { createCountries } = require("./context");
const Country = require("./model/Country");

sequelize.sync().then(() => {
  console.log("Database ready!");
});

const PORT = process.env.PORT || 3100;

//STUB - Routes

app.get("/", async (req, res) => {
  res.send(await Country.findAll());
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});

//STUB - Country creation
createCountries();