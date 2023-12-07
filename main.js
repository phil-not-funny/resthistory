const express = require("express");
const app = express();
const sequelize = require("./database");

const { createCountries } = require("./context");
const Country = require("./model/Country");

sequelize.sync({ force: true }).then(() => {
  console.log("Database ready!");
  createCountries();
});

const PORT = process.env.PORT || 3100;

//STUB - Routes

app.get("/all", async (req, res) => {
  res.send(await Country.findAll({}));
});

app.get("/country/:name", async (req, res) => {
  res.send(
    await Country.findOne({
      where: {
        name: req.params.name,
      },
    })
  );
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
