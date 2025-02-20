// src/controllers/promotion.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { PromotionService } from '../service/promotion.service';
import { CreatePromotionDto, UpdatePromotionDto } from '../dto/promotion.dto';
import { Promotion } from '../entity/promotion';

@Controller('promotions')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  @Post()
  async create(@Body() createPromotionDto: CreatePromotionDto): Promise<Promotion> {
    try {
      return await this.promotionService.create(createPromotionDto);
    } catch (error) {
      throw new HttpException('Failed to create promotion', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll(): Promise<Promotion[]> {
    return this.promotionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Promotion> {
    const promotion = await this.promotionService.findOne(id);
    if (!promotion) {
      throw new HttpException('Promotion not found', HttpStatus.NOT_FOUND);
    }
    return promotion;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePromotionDto: UpdatePromotionDto,
  ): Promise<Promotion> {
    try {
      return await this.promotionService.update(id, updatePromotionDto);
    } catch (error) {
      throw new HttpException('Failed to update promotion', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.promotionService.remove(id);
    return { message: 'Promotion successfully deleted' };
  }
}