var express = require('express');
var app = module.exports = express();

app.get("/api/search", function (req, res) {
  console.log("GET search");
  console.log(req.query);

  // stub data
  let result = [
    { 
      id: 2,
      name: "Big Vessel", 
      lat: 58.277190,
      lng: -0.779711,
      size: 50 
    }
  ]

  res.json(result)
});