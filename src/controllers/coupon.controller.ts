import { Request, Response } from 'express';
import { AppDataSource } from '../config';
import { Coupon } from '../entity/coupon.entity';
import { UserInfo } from '../entity/user.entity'; 

//create coupon
export const createCoupon = async (req: Request, res: Response) => {
    try {
        const { user_id, name, duration, offer, valid_until, terms } = req.body;

        if (!user_id || !name || !duration || !offer || !valid_until || !terms) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

    
        const user = await AppDataSource.getRepository(UserInfo).findOneBy({ id: user_id });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

      
        const couponRepository = AppDataSource.getRepository(Coupon);
        const newCoupon = couponRepository.create({
            user_id, 
            name,
            duration: new Date(duration), 
            offer: new Date(offer),
            valid_until: new Date(valid_until),
            terms,
            user, 
        });

        const savedCoupon = await couponRepository.save(newCoupon);

        return res.status(201).json({
            message: 'Coupon created successfully!',
            data: savedCoupon,
        });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        console.error(errorMessage);
        return res.status(500).json({
            message: 'Internal Server Error',
            error: errorMessage,
        });
    }
};

//get coupon
export const getCoupons = async (req: Request, res: Response) => {
    try {
        const couponRepository = AppDataSource.getRepository(Coupon);

        const userId = req.user?.id ?? '';

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        
        const coupons = await couponRepository.find({
            where: {
                user: {
                    id: userId, 
                }
            },
            select: {
                id: true,
                name: true,
                duration: true,
                offer: true,
                valid_until: true,
                terms: true,
            },
            relations: ['user'], 
        });

        console.log(coupons);

        return res.status(200).json({
            message: 'Coupons fetched successfully!',
            data: coupons,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Internal Server Error',
            error: err instanceof Error ? err.message : 'Unknown error occurred',
        });
    }
};