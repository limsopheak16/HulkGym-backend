import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740553150510 implements MigrationInterface {
    name = 'Default1740553150510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "survey" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "survey" DROP COLUMN "name"`);
    }

}
