// src/dto/promotion.dto.ts
export class CreatePromotionDto {
    promo_name: string;
    discount_rate: string;
    expiry_date: Date;
    offer_details?: string;
  }
  
  export class UpdatePromotionDto {
    promo_name?: string;
    discount_rate?: string;
    expiry_date?: Date;
    offer_details?: string;
  }