import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1739956025652 implements MigrationInterface {
    name = 'Default1739956025652'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "membership" DROP CONSTRAINT "FK_4591f08f4c89087ab370ab50b11"`);
        await queryRunner.query(`ALTER TABLE "membership" DROP COLUMN "promotion_id"`);
        await queryRunner.query(`ALTER TABLE "membership" ADD "promotion_id" uuid`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP CONSTRAINT "PK_fab3630e0789a2002f1cadb7d38"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD CONSTRAINT "PK_fab3630e0789a2002f1cadb7d38" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "expiry_date"`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "expiry_date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "offer_details" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "membership" ADD CONSTRAINT "FK_4591f08f4c89087ab370ab50b11" FOREIGN KEY ("promotion_id") REFERENCES "promotion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "membership" DROP CONSTRAINT "FK_4591f08f4c89087ab370ab50b11"`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "offer_details" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "expiry_date"`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "expiry_date" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP CONSTRAINT "PK_fab3630e0789a2002f1cadb7d38"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD CONSTRAINT "PK_fab3630e0789a2002f1cadb7d38" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "membership" DROP COLUMN "promotion_id"`);
        await queryRunner.query(`ALTER TABLE "membership" ADD "promotion_id" integer`);
        await queryRunner.query(`ALTER TABLE "membership" ADD CONSTRAINT "FK_4591f08f4c89087ab370ab50b11" FOREIGN KEY ("promotion_id") REFERENCES "promotion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
