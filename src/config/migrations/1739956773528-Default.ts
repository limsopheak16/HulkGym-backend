import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1739956773528 implements MigrationInterface {
    name = 'Default1739956773528'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "brand_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "promotion" ADD "brand_id" integer NOT NULL`);
    }

}
