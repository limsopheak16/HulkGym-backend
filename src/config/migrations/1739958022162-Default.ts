import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1739958022162 implements MigrationInterface {
    name = 'Default1739958022162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "announcement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(30) NOT NULL, "description" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "branch_id" uuid, CONSTRAINT "PK_e0ef0550174fd1099a308fd18a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "branch" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "location" character varying(255) NOT NULL, "image" character varying(255), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "company_id" uuid, CONSTRAINT "PK_2e39f426e2faefdaa93c5961976" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(50) NOT NULL, "phone_number" character varying(50) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "branch_id" uuid, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "company_info" DROP COLUMN "modifiedAt"`);
        await queryRunner.query(`ALTER TABLE "company_info" ADD "phone_number" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company_info" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "company_info" DROP COLUMN "logo"`);
        await queryRunner.query(`ALTER TABLE "company_info" ADD "logo" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company_info" DROP COLUMN "company_name"`);
        await queryRunner.query(`ALTER TABLE "company_info" ADD "company_name" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company_info" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "company_info" ADD "email" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company_info" DROP COLUMN "location"`);
        await queryRunner.query(`ALTER TABLE "company_info" ADD "location" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD CONSTRAINT "FK_d99f6fdc8cf473b467faa3765d2" FOREIGN KEY ("branch_id") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branch" ADD CONSTRAINT "FK_876085341242e41592b0e6b15e0" FOREIGN KEY ("company_id") REFERENCES "company_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_b3dd4642d1cdd65ce8794876867" FOREIGN KEY ("branch_id") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_b3dd4642d1cdd65ce8794876867"`);
        await queryRunner.query(`ALTER TABLE "branch" DROP CONSTRAINT "FK_876085341242e41592b0e6b15e0"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP CONSTRAINT "FK_d99f6fdc8cf473b467faa3765d2"`);
        await queryRunner.query(`ALTER TABLE "company_info" DROP COLUMN "location"`);
        await queryRunner.query(`ALTER TABLE "company_info" ADD "location" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company_info" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "company_info" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company_info" DROP COLUMN "company_name"`);
        await queryRunner.query(`ALTER TABLE "company_info" ADD "company_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company_info" DROP COLUMN "logo"`);
        await queryRunner.query(`ALTER TABLE "company_info" ADD "logo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company_info" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "company_info" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "company_info" ADD "modifiedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "branch"`);
        await queryRunner.query(`DROP TABLE "announcement"`);
    }

}
