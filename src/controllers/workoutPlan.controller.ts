import { Request, Response } from "express";
import { AppDataSource } from "../config";
import { WorkoutPlan } from "../entity/workoutPlan";

export const createWorkoutPlan = async (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required." });
  }

  const workoutPlanRepo = AppDataSource.getRepository(WorkoutPlan);

  try {
    const newWorkoutPlan = workoutPlanRepo.create({ name });
    await workoutPlanRepo.save(newWorkoutPlan);

    return res.status(201).json({
      message: "Workout plan created successfully",
      workoutPlan: newWorkoutPlan,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
