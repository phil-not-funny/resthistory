const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3100;

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
  });