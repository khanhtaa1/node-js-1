const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const app = express();
const port = 3000;
const path = require("path");

// http logger
app.use(morgan("combined"));

// template engine
app.engine("hbs", hbs.engine({ extname: ".hbs" }));
// app sử dụng template engine là handlebars , name nó là handlebars  -> ném thư viện handle bare vào đó
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources/views"));
// set path den views
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("new");
});
// khi url thay doi -> content thay doi ung vs new.handlebars

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
