var express = require('express');
var app = module.exports = express();

let emergenciesData = [
  { 
    id: 1, 
    name: "Little Hiccup",
    lat: 58.277190,
    lng: -0.779711,
    size: 5
  },
  { 
    id: 2, 
    name: "Huge Disaster",
    lat: 53.777190,
    lng: 3.479711,
    size: 50
  },
  { 
    id: 3, 
    name: "Doomsday Disaster",
    lat: 57.077190,
    lng: 5.479711,
    size: 500
  }
]

app.get("/api/emergencies", function (req, res) {
  console.log("GET emergencies");

  res.json(emergenciesData)
});

app.get("/api/emergency/:id", function (req, res) {
  console.log("GET emergency");
  console.log(req.params.id);

  const index = emergenciesData.findIndex(el => el.id == req.params.id);
  if (index > -1) {
    res.json(emergenciesData[index]);

  } else {
    res.end(404);
  }

  res.end();
});

app.post("/api/emergency", function (req, res) {
  console.log("POST emergency");
  console.log(req.body);

  let data = req.body;
  data.id = emergenciesData.length + 1;

  emergenciesData.push(data);

  res.end(JSON.stringify(data));
});

app.delete("/api/emergency/:id", function (req, res) {
  console.log("DELETE emergency");
  console.log(req.params.id);

  const index = emergenciesData.findIndex(el => el.id == req.params.id);
  if (index > -1) {
    emergenciesData.splice(index, 1);

  } else {
    res.end(404);
  }

  res.end();
});

app.put("/api/emergency/:id", function (req, res) {
  console.log("PUT emergency");
  console.log(req.params.id);
  console.log(req.body);

  const index = emergenciesData.findIndex(el => el.id == req.params.id);
  if (index > -1) {
    emergenciesData.splice(index, 1);

    let data = req.body;
    emergenciesData.push(data);

    res.end(JSON.stringify(data));

  } else {
    res.end(404);
  }
});