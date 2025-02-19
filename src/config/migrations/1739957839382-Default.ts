import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1739957839382 implements MigrationInterface {
    name = 'Default1739957839382'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "membership" DROP COLUMN "amount_paid"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "membership" ADD "amount_paid" character varying(255) NOT NULL`);
    }

}
