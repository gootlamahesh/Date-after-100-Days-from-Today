const express = require("express");
const addDays = require("date-fns/addDays");

const date = new Date();
const results = addDays(date, 100);
module.exports = app = express();

app.get("/", (req, res) => {
  let text = `${results.getDate()}/${
    results.getMonth() + 1
  }/${results.getFullYear()}`;
  res.send(text);
});

app.listen(3000);
