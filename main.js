const express = require("express");
const app = express();
const { Sequelize, DataTypes, Model } = require("sequelize");
//const Country = require('./common/models/Country');

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./storage/data.sqlite",
});

const PORT = process.env.PORT || 3100;

async function start() {
  app.use(express.json());
  try {
    await sequelize.authenticate();
    console.log("Connection to SQLite database established");
  } catch {
    console.error(
      "Connection terminated. I'm sorry to intrrupt you Elizabeth."
    );
  }
}

await start();

// STUB Model

class Country extends Model {}

Country.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  names: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// STUB Routes

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
