import { MigrationInterface, QueryRunner } from "typeorm";


export class Default1739762384395 implements MigrationInterface {
    name = 'Default1739762384395'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "activity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(30) NOT NULL, "icon" character varying(30) NOT NULL, "sets" integer NOT NULL, "reps" integer NOT NULL, "currentSet" integer NOT NULL DEFAULT '1', "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_24625a1d6b1b089c8ae206fe467" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "userEmail" character varying NOT NULL, "userContact" character varying, "password" character varying NOT NULL, "role" character varying(255) DEFAULT 'user', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "modifiedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_273a06d6cdc2085ee1ce7638b24" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "membership" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" integer NOT NULL, "start_date" character varying(255) NOT NULL, "end_date" character varying(255) NOT NULL, "amount_paid" character varying(255) NOT NULL, "promotion_id" uuid, CONSTRAINT "PK_83c1afebef3059472e7c37e8de8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "promotion" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "promo_name" character varying(255) NOT NULL, "discount_rate" character varying(255) NOT NULL, "expiry_date" character varying(255) NOT NULL, CONSTRAINT "PK_fab3630e0789a2002f1cadb7d38" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "activity" ADD CONSTRAINT "FK_3571467bcbe021f66e2bdce96ea" FOREIGN KEY ("userId") REFERENCES "user_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "membership" ADD CONSTRAINT "FK_4591f08f4c89087ab370ab50b11" FOREIGN KEY ("promotion_id") REFERENCES "promotion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "membership" DROP CONSTRAINT "FK_4591f08f4c89087ab370ab50b11"`);
        await queryRunner.query(`ALTER TABLE "activity" DROP CONSTRAINT "FK_3571467bcbe021f66e2bdce96ea"`);
        await queryRunner.query(`DROP TABLE "promotion"`);
        await queryRunner.query(`DROP TABLE "membership"`);
        await queryRunner.query(`DROP TABLE "user_info"`);
        await queryRunner.query(`DROP TABLE "activity"`);
    }

}
