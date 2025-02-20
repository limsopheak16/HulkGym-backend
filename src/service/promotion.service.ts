// src/service/promotion.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Promotion } from '../entity/promotion';
import { CreatePromotionDto, UpdatePromotionDto } from '../dto/promotion.dto';

@Injectable()
export class PromotionService {
  constructor(
    @InjectRepository(Promotion)
    private promotionRepository: Repository<Promotion>,
  ) {}

  async findAll(): Promise<Promotion[]> {
    return this.promotionRepository.find();
  }

  async findOne(id: string): Promise<Promotion> {
    return this.promotionRepository.findOne({ where: { id } });
  }

  async create(createPromotionDto: CreatePromotionDto): Promise<Promotion> {
    const promotion = this.promotionRepository.create(createPromotionDto);
    return this.promotionRepository.save(promotion);
  }

  async update(id: string, updatePromotionDto: UpdatePromotionDto): Promise<Promotion> {
    await this.promotionRepository.update(id, updatePromotionDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.promotionRepository.delete(id);
  }
}