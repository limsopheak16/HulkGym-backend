import { Request, Response } from "express";
import { AppDataSource } from "../config";
import { WorkoutPlan } from "../entity/workoutPlan";

export const getWorkoutplan = async (req: Request, res: Response) => {
  try {
    const workoutPlanRepo = AppDataSource.getRepository(WorkoutPlan);
    const workouts = await workoutPlanRepo.find({
      select: [
        "id",
        "name"
      ],
    });

    return res.status(200).json({ message: "Success", workouts });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error!" });
  }
};
