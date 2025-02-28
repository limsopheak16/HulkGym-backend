import { Router } from 'express';
import { createCoupon , getCoupons} from '../controllers/coupon.controller'; 

const router = Router();


router.post('/coupons', createCoupon);
router.get('/coupons', getCoupons);

export default router;
