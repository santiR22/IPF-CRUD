import { Router } from "express";

const router = Router();

router.get("/get-matters");
router.get("/get-matter/:id");
router.post("/create-matter");
router.put("/update-matter");
router.delete("/delete-matter");

export default router;