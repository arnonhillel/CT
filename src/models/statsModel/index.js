const dbConfig = require("../../db/config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.scans = require("./scansModel")(mongoose);
// db.patients = require("./patientModel")(mongoose);
// db.hospitals = require("./hospitalsModels")(mongoose);

module.exports = db;