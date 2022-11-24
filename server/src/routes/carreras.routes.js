import { Router } from "express";

const router = Router();

router.get("/get-careers");
router.get("/get-career/:id");
router.post("/create-career");
router.put("/update-career");
router.delete("/delete-career");

export default router;
