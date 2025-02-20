import { Router } from "express";
import { createWorkoutPlan } from "../controllers/workoutPlan.controller";
import protectRoute from "../middleware/auth";

const router = Router();

router.post("/workoutPlan", protectRoute(), createWorkoutPlan);

export default router;



