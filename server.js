var express = require("express");
var logger = require("morgan");
var chalk = require("chalk");
var path = require("path");
var fs = require('fs');
var https = require('https');
var credentials;
var ssl = false;
var device = require('express-device');

// SSL cert
var privateKey = fs.readFileSync('sslcert/key.pem', 'utf8');
var certificate = fs.readFileSync('sslcert/cert.pem', 'utf8');
credentials = {
    key: privateKey,
    cert: certificate
};

var app = express();
// clear console for clean output
console.clear();

var port = process.env.PORT || 4000;
app.set("views", "./views");

app.use(logger("dev"));
app.use(device.capture());

app.use(express.static(path.join(__dirname, "./public")));
app.get("/", function (req, res) {
    console.log(req.device.type);
    if (req.device.type === 'desktop') {
        return res.sendFile(path.join(__dirname, './views/desktop.html'));
    }
    return res.sendFile(path.join(__dirname, './views/index.html'));
});
// start the server
if (ssl) {
    https.createServer(credentials, app).listen(port);
    console.log(chalk.red("Server started! At https://localhost:" + port));
}

app.listen(port);
console.log(chalk.yellow("Server started! At http://localhost:" + (port)));