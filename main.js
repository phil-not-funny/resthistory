const express = require("express");
const app = express();
const sequelize = require("./database");

const { createCountries } = require("./context");

sequelize.sync().then(() => {
  console.log("Database ready!");
});

const PORT = process.env.PORT || 3100;

//STUB - Country creation
createCountries();

//STUB - Routes

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
