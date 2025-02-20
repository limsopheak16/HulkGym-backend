import { Router } from "express";
import protectRoute from "../middleware/auth";
import { CreateNewPromotion } from "../controllers/promotion.controlller";

const router = Router();
router.post("create", protectRoute, CreateNewPromotion );
export default router;
