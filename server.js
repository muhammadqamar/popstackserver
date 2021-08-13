const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

var request = require("request")

app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

//cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


const port = process.env.PORT || 3001;

app.post("/postdata", function (req, res) {
  console.log(req.body.ip)
  request(
    {
      url: `https://popstack.us6.list-manage.com/subscribe/post-json?u=07bca3f7895bbbe1e7211e2d0&amp;id=513252f2c1&EMAIL=${req.body.email}&POPUSER=${req.body.name}&IP=${req.body.ip}&SYSTEM=${req.body.system}&LOCATION=${req.body.location}&POPNAME=${req.body.pop}&ORIGIN=PopFooterEARequest`,
      headers: {
       
      },
    },
    function (error, response, body) {
     
      res.send(response);
    }
  );
});

app.listen(port, () => console.log(`Example app listening on port 3001`));
