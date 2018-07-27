var express = require("express");
var pug = require("pug");
var path = require("path");
var app = express();
var port = process.env.PORT || 4000;
app.set("views", "./views");
// app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "./public")));
app.get("/", function (req, res) {
    res.sendfile('./views/index.html');
});
// start the server
app.listen(port);
console.log("Server started! At http://localhost:" + port);