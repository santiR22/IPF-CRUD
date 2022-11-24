import { Router } from "express";

const router = Router();

router.get("/mostar-asistencias");
router.get("/mostar-asistencia/:id");
router.post("/create-profile");
router.put("/modificar-asistencia");
router.delete("/delete-profile");

export default router;