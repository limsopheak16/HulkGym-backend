import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740639042003 implements MigrationInterface {
    name = 'Default1740639042003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "exercise" ADD "name" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise" DROP COLUMN "reps"`);
        await queryRunner.query(`ALTER TABLE "exercise" ADD "reps" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise" DROP COLUMN "calories"`);
        await queryRunner.query(`ALTER TABLE "exercise" ADD "calories" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise" DROP COLUMN "calories"`);
        await queryRunner.query(`ALTER TABLE "exercise" ADD "calories" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise" DROP COLUMN "reps"`);
        await queryRunner.query(`ALTER TABLE "exercise" ADD "reps" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "exercise" ADD "name" character varying(30) NOT NULL`);
    }

}
