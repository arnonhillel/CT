import { Router } from "express";
import { scansController } from "../controllers/scans.controller";

const router: Router = Router();
const baseUrls: string = "/";

router.get(baseUrls, scansController.getScanByPatientId);
router.post(baseUrls, scansController.createScan);

export const scansRouter: Router = router;
