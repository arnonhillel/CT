import { ScansModel } from "../models/scans.Model";
const db = require("../models/statsModel/index.js");
const Scans = db.scans;

class ScansService {
  public async getScansByPatientId(_patientId:any) {
    let response = undefined;
    const patientId = parseInt(_patientId);
    // this.getFromDb
    return response;
  }



  public async createScan() {
    console.log('in service');
    let response = {};
    await this.saveInDB();
    return response;
  }


  public async saveInDB() {
    const data = {
      "patientId": 32432,
      "hospitalsId":2222,
      "timeStamp": 2342352354
    }
    await Scans.create(data);
    console.log(`Request saved`);
  }
}

export const scansService = new ScansService();
