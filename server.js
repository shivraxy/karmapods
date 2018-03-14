let express = require("express");
let bodyParser = require("body-parser");

//let PORT = process.env.PORT||"8080"
let PORT = "8080"
let app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

routes = require("./controllers/karma_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log('Karma is Beep and it runs on  PORT ' + PORT)
});