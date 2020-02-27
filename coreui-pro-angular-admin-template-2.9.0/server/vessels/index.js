var express = require('express');
var app = module.exports = express();

let vesselsData = [
  { 
    id: 1, 
    name: "Tiny Vessel", 
    position: "pos1", 
    size: 5 
  },
  { 
    id: 2,
    name: "Big Vessel", 
    position: "pos2", 
    size: 50 
  }
]

app.get("/api/vessels", function (req, res) {
  console.log("GET vessels");

  res.json(vesselsData)
});

app.get("/api/vessel/:id", function (req, res) {
  console.log("GET vessel");
  console.log(req.params.id);

  const index = vesselsData.findIndex(el => el.id == req.params.id);
  if (index > -1) {
    res.json(vesselsData[index]);

  } else {
    res.end(404);
  }

  res.end();
});

app.post("/api/vessel", function (req, res) {
  console.log("POST vessel");
  console.log(req.body);

  let data = req.body;
  data.id = vesselsData.length + 1;

  vesselsData.push(data);

  res.end(JSON.stringify(data));
});

app.delete("/api/vessel/:id", function (req, res) {
  console.log("DELETE vessel");
  console.log(req.params.id);

  const index = vesselsData.findIndex(el => el.id == req.params.id);
  if (index > -1) {
    vesselsData.splice(index, 1);

  } else {
    res.end(404);
  }

  res.end();
});

app.put("/api/vessel/:id", function (req, res) {
  console.log("PUT vessel");
  console.log(req.params.id);
  console.log(req.body);

  const index = traininglogsData.findIndex(el => el.id == req.params.id);
  if (index > -1) {
    traininglogsData.splice(index, 1);

    let data = req.body;
    traininglogsData.push(data);

    res.end(JSON.stringify(data));

  } else {
    res.end(404);
  }
});