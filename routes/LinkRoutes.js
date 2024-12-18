import { Router } from "express";
import {
  createShortLink,
  getOriginalLink,
  getInfoLink,
  passwordLink,
} from "../controllers/Linkcontrollers.js";

const router = Router();

router.post("/shortlink", createShortLink);
router.get("/getlink/:getshortlink", getOriginalLink);
router.post("/info", getInfoLink);
router.post("/password", passwordLink);

export default router;
