var express = require('express');
var app = module.exports = express();

var emergencies = require('../emergencies').emergencies;
var vessels = require('../vessels').vessels;

app.get("/api/search", function (req, res) {
  console.log("GET search");
  console.log(req.query);

  let emergency = emergencies.find(el => el.id == req.query.emergencyId);

  if (emergency) {
    let emergencySize = emergency.size;
    let result = vessels.filter(el => el.size >= emergencySize);

    res.json(result)
  }
  
  res.status(400)
     .send("Could not find an emergency with id: " + req.query.emergencyId);  
});