import express from "express";
import { scansRouter } from "./routes/scansRouter";
import "./models/statsModel/dbModel";
import bodyParser from "body-parser";
const db = require("./models/statsModel/index.js");

const app = express();
const port = 3000;
const baseUrl = "/api";
// const baseUrlStat = "/api/stats";
// Set up mongoose connection
const baseUrlHospitals = "/api/hospitals";
const baseUrlScans = "/api/scans";

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data: any) => {
    console.log("Connected to the database!");
  })
  .catch((err: any) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

async function initDb(scans: any, patients: any, hospitals: any) {
  let result = await patients.count();
  if (result === 0) {
    patients.create({
      requests: 0,
      distribution: [],
    });
  }
}

app.listen(port, async (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

app.use(baseUrlScans, scansRouter);
// app.use(baseUrlHospitals, statsRouter); TODO Hospitals router 
// app.use(baseUrlpateints, statsRouter); TODO pateints router 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

export { app };
