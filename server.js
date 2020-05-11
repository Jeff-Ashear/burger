 const express = require("express");
 const PORT = process.env.PORT || 3000;

 var app = express();

 app.use(express.static("public"));

 app.use(express.urlencoded({ extend: true }));
 app.use(express.json());

 var exphbs = require("express-handlebars");

 app.engine("handlebars", exphbs({ defaultLayout: "main"}));
 app.set("view engine", "handlebars");

 var routes = require("./controllers/burgerController.js");

 app.use(routes);

 app.listen(PORT, function() {
     console.log("app now listening at localhost:" + PORT);
 });