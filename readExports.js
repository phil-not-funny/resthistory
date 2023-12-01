const { parse } = require("csv-parse");
const fs = require("fs");

async function read() {
  const exported = [];
  const exportedObject = {};
  fs.createReadStream("./storage/exported.csv")
    .pipe(parse({ delimiter: ";", from_line: 1 }))
    .on("data", function (row) {
      if (!row[0].includes("/") && !row[0].includes("1")) {
        console.log("Country: " + row[0] + ";");
        let noDupes = [];
        row.filter((country) => {
          country = country.replace(/(?<=\d)\s+/, ":");//.replaceAll(/\s/g, "_");
          if (!noDupes.includes(country)) noDupes.push(country);
        });
        exported.push(noDupes);
      }
    })
    .on("error", function (error) {
      console.log(error.message);
    })
    .on("end", function () {
      console.log("File read successful");
      exported.forEach((row) => {
        Object.defineProperty(exportedObject, row[0].replaceAll(/\s/g, "_"), {
          value: row.slice(1),
          writable: true,
          enumerable: true,
        });
      });
      fs.writeFile("./storage/exported.json", JSON.stringify(exportedObject), {
        encoding: "utf-8",
      }, () => console.log("File write successfull"));
    });
}

module.exports = read;
