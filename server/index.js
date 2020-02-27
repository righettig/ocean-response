require("dotenv").config();

const cors       = require("cors");
const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();

// ------------------------------
// Load the middlewares
// ------------------------------
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Vessels
//---------
var vessels = require('./vessels');
app.use(vessels);


// Emergencies
//-------------
var emergencies = require('./emergencies');
app.use(emergencies);


// Search
//-------------
var emergencies = require('./search');
app.use(emergencies);


app.listen("3120");
console.log("Listening on localhost:3120");