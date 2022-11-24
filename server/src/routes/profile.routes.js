import { Router } from "express";
import {
  createProfile,
  deleteProfile,
  getProfile,
  getProfiles,
  updateProfile,
} from "../controllers/profile.controllers.js";

const router = Router();

router.get("/get-profiles", getProfiles);
router.get("/get-profile/:id", getProfile);
router.post("/create-profile", createProfile);
router.put("/update-profile/:id", updateProfile);
router.delete("/delete-profile/:id", deleteProfile);

export default router;
