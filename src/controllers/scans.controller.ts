import { Response, Request } from "express";
import { ScansModel } from "../models/scans.Model";
import { scansService } from "../services/scans.service";

class ScansController {
  public async getScanByPatientId(req: Request, res: Response) {
    let patientId = req.query.patientId;
    if (!!patientId) {
      const response = await scansService.getScansByPatientId(patientId);
      if (!response) {
        res
          .status(404) // HTTP status 404: NotFound
          .send("No scans for this Patient!");
      }
      console.log(response);
      // console.log(req.query);
      res.status(200).send(response);
    }
    else {
      res
        .status(400) // HTTP status 400: NotFound
        .send("please specify Patient Id");
    }
  }

  public async createScan(req: Request, res: Response) {
    const response = await scansService.createScan();
    res.status(200).send('created'); 

  }
}

export const scansController = new ScansController();
