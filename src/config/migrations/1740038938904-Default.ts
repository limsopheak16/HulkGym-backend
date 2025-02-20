import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740038938904 implements MigrationInterface {
    name = 'Default1740038938904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company_info" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "company_info" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "company_info" DROP COLUMN "location"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company_info" ADD "location" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company_info" ADD "phone_number" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company_info" ADD "email" character varying(50) NOT NULL`);
    }

}
