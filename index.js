// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

const isInValidDate = (date) => date.toUTCString() === "Invalid Date";

app.get("/api/:date", function (req, res) {
  let date = new Date(req.params.date);
  if (isInValidDate(date)) {
    date = new Date(+req.params.date);
  }
  if (isInValidDate(date)) {
    res.json({ error: "Invalid Date" });
    return;
  }
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

app.get("/api", (req, res) => {
  let date = new Date();
  let UTC = date.getTime();
  UTC = new Date(UTC);
  UTS = UTC.toUTCString();
  let UNIX = date.getTime();
  res.json({
    unix: UNIX,
    utc: UTS,
  });
});

// app.get("/api/whoami", (req, res) => {
//   res.json({
//     ipaddress: req.socket.remoteAddress,
//     language: req.headers["accept-language"],
//     software: req.headers["user-agent"],
//   });
// });

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
