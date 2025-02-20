import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1739957660611 implements MigrationInterface {
    name = 'Default1739957660611'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "membership" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "membership" ADD "plan_name" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "membership" ADD "price" numeric(10,2)`);
        await queryRunner.query(`ALTER TABLE "membership" ADD "features" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "membership" DROP COLUMN "features"`);
        await queryRunner.query(`ALTER TABLE "membership" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "membership" DROP COLUMN "plan_name"`);
        await queryRunner.query(`ALTER TABLE "membership" ADD "user_id" integer NOT NULL`);
    }

}
