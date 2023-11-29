const sequelize = require("./database");
const Country = require("./model/Country");

async function createCountries() {
  await Country.create({ name: "United States" });
  await Country.create({ name: "Canada" });
}

module.exports = { createCountries };
