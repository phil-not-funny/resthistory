const express = require("express");
const app = express();
const sequelize = require("./database");

const { createCountries } = require("./context");
const Country = require("./model/Country");
const read = require("./readExports");

sequelize.sync().then(() => {
  console.log("Database ready!");
  read();
});

const PORT = process.env.PORT || 3100;

//STUB - Routes

app.get("/all", async (req, res) => {
  res.send(await Country.findAll({}));
});

app.get("/country/:id", async (req, res) => {
  res.send(
    await Country.findOne({
      where: {
        id: req.params.id,
      },
    })
  );
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});

//STUB - Country creation
createCountries();
