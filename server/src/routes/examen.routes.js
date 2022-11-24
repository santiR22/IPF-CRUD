import { Router } from "express";

const router = Router();

router.get("/get-tests");
router.get("/get-test/:id");
router.post("/create-test");
router.put("/update-test");
router.delete("/delete-test");

export default router;