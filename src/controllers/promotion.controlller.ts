import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Promotion } from "../entity/promotion";
import { AppDataSource } from "../config";

export const CreateNewPromotion = async (req: Request, res: Response) => {
  try {
    const promotionRepository = AppDataSource.getRepository(Promotion);
    const { promo_name, discount_rate, expiry_date, offer_details } = req.body;

    const newPromotion = promotionRepository.create({
     id: uuidv4(),
      promo_name,
      discount_rate,
      expiry_date,
      offer_details,
    });

    await promotionRepository.save(newPromotion);

    res.status(201).json({
      message: "Promotion created successfully",
      promotion: newPromotion,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error", error: (error as Error).message });
  }
};
