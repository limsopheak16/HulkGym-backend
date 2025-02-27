import { Router } from "express";
import { getWorkoutplan } from "../controllers/workoutPlan.controller";
import protectRoute from "../middleware/auth";
import { RoleEnum } from "../common";

const router = Router();

router.get("/get", protectRoute(Object.values(RoleEnum)), getWorkoutplan);

export default router;
