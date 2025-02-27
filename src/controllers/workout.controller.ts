import { Request, Response } from "express";
import { AppDataSource } from "../config";
import { Workout } from "../entity/workout.entity";

export const getWorkoutplan = async (req: Request, res: Response) => {
  try {
    const workoutRepo = AppDataSource.getRepository(Workout);
    const workouts = await workoutRepo.find({
      select: [
        "id",
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
