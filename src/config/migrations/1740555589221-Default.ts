import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740555589221 implements MigrationInterface {
    name = 'Default1740555589221'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "activity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(30) NOT NULL, "icon" character varying(30) NOT NULL, "sets" integer NOT NULL, "reps" integer NOT NULL, "currentSet" integer NOT NULL DEFAULT '1', "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_24625a1d6b1b089c8ae206fe467" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "marketing" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_b7a15c63134799b9e73ad4a463a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "survey" ("id" SERIAL NOT NULL, "message" character varying NOT NULL, "marketing_id" integer, "user_id" uuid, CONSTRAINT "PK_f0da32b9181e9c02ecf0be11ed3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "coupon" ("id" SERIAL NOT NULL, "user_id" uuid NOT NULL, "name" character varying(50) NOT NULL, "duration" character varying(50) NOT NULL, "offer" character varying(50) NOT NULL, "valid_until" character varying(50) NOT NULL, "terms" character varying(50) NOT NULL, CONSTRAINT "PK_fcbe9d72b60eed35f46dc35a682" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(50) NOT NULL, "phone_number" character varying(50) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "branch_id" uuid, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "announcement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(30) NOT NULL, "description" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "branch_id" uuid, CONSTRAINT "PK_e0ef0550174fd1099a308fd18a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "membership" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "start_date" character varying(255) NOT NULL, "end_date" character varying(255) NOT NULL, "plan_name" character varying(255), "price" numeric(10,2), "features" text, "promotion_id" uuid, "user_id" uuid, CONSTRAINT "PK_83c1afebef3059472e7c37e8de8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "promotion" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "promo_name" character varying(255) NOT NULL, "discount_rate" character varying(255) NOT NULL, "expiry_date" date NOT NULL, "offer_details" text, "branch_id" uuid, CONSTRAINT "PK_fab3630e0789a2002f1cadb7d38" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "branch" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "location" character varying(255) NOT NULL, "image" character varying(255), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "company_id" uuid, CONSTRAINT "PK_2e39f426e2faefdaa93c5961976" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "company_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "logo" character varying(50) NOT NULL, "company_name" character varying(50) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_88c3e323679d0747ffbb83f3f78" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "company_id" uuid, "workout_id" integer, "fullname" character varying NOT NULL, "phone_number" character varying, "email" character varying NOT NULL, "password" character varying NOT NULL, "coupon_id" integer, CONSTRAINT "PK_273a06d6cdc2085ee1ce7638b24" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exercise" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(30) NOT NULL, "sets" integer NOT NULL, "weight_lbs" integer, "reps" character varying(30) NOT NULL, "calories" character varying(30) NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "workout_id" uuid, CONSTRAINT "PK_a0f107e3a2ef2742c1e91d97c14" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "workout" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "workoutPlan_id" uuid, CONSTRAINT "PK_ea37ec052825688082b19f0d939" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "workoutPlan" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f6406378163df572b911f85f7c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_info_exercise_exercise" ("userInfoId" uuid NOT NULL, "exerciseId" uuid NOT NULL, CONSTRAINT "PK_a63f1f38e3625ee0d782b077138" PRIMARY KEY ("userInfoId", "exerciseId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_616999a98ba69a30028336c279" ON "user_info_exercise_exercise" ("userInfoId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e5dfb2df88890df7da9fa6174e" ON "user_info_exercise_exercise" ("exerciseId") `);
        await queryRunner.query(`CREATE TABLE "exercise_user_info_user_info" ("exerciseId" uuid NOT NULL, "userInfoId" uuid NOT NULL, CONSTRAINT "PK_7722e0f51ab45a28ee6e6643e4a" PRIMARY KEY ("exerciseId", "userInfoId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_875bae7e3edcbc630c90829766" ON "exercise_user_info_user_info" ("exerciseId") `);
        await queryRunner.query(`CREATE INDEX "IDX_59b7aed15b632898555d3e9451" ON "exercise_user_info_user_info" ("userInfoId") `);
        await queryRunner.query(`ALTER TABLE "activity" ADD CONSTRAINT "FK_3571467bcbe021f66e2bdce96ea" FOREIGN KEY ("userId") REFERENCES "user_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "survey" ADD CONSTRAINT "FK_d2e6d31ae1d14fe0ee4266afe6d" FOREIGN KEY ("marketing_id") REFERENCES "marketing"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "survey" ADD CONSTRAINT "FK_a37da0d039df5145bd187a32e09" FOREIGN KEY ("user_id") REFERENCES "user_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "coupon" ADD CONSTRAINT "FK_05e2d1d174be912392277fc095c" FOREIGN KEY ("user_id") REFERENCES "user_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_b3dd4642d1cdd65ce8794876867" FOREIGN KEY ("branch_id") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD CONSTRAINT "FK_d99f6fdc8cf473b467faa3765d2" FOREIGN KEY ("branch_id") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "membership" ADD CONSTRAINT "FK_4591f08f4c89087ab370ab50b11" FOREIGN KEY ("promotion_id") REFERENCES "promotion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "membership" ADD CONSTRAINT "FK_e9c72e8d29784031c96f5c6af8d" FOREIGN KEY ("user_id") REFERENCES "user_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD CONSTRAINT "FK_f4bcb0da74674d86807e5f5e584" FOREIGN KEY ("branch_id") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branch" ADD CONSTRAINT "FK_876085341242e41592b0e6b15e0" FOREIGN KEY ("company_id") REFERENCES "company_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD CONSTRAINT "FK_78aabf3f77fc409bbe02a37506c" FOREIGN KEY ("coupon_id") REFERENCES "coupon"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD CONSTRAINT "FK_de6d1df17eb875ffe5f1919292e" FOREIGN KEY ("company_id") REFERENCES "company_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exercise" ADD CONSTRAINT "FK_f779e20c8324fc65f6d918fc8c0" FOREIGN KEY ("workout_id") REFERENCES "workout"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "workout" ADD CONSTRAINT "FK_d1c30d2b5486cc92cefd1a70f4b" FOREIGN KEY ("workoutPlan_id") REFERENCES "workoutPlan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_info_exercise_exercise" ADD CONSTRAINT "FK_616999a98ba69a30028336c2797" FOREIGN KEY ("userInfoId") REFERENCES "user_info"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_info_exercise_exercise" ADD CONSTRAINT "FK_e5dfb2df88890df7da9fa6174e2" FOREIGN KEY ("exerciseId") REFERENCES "exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "exercise_user_info_user_info" ADD CONSTRAINT "FK_875bae7e3edcbc630c908297664" FOREIGN KEY ("exerciseId") REFERENCES "exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "exercise_user_info_user_info" ADD CONSTRAINT "FK_59b7aed15b632898555d3e94512" FOREIGN KEY ("userInfoId") REFERENCES "user_info"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_user_info_user_info" DROP CONSTRAINT "FK_59b7aed15b632898555d3e94512"`);
        await queryRunner.query(`ALTER TABLE "exercise_user_info_user_info" DROP CONSTRAINT "FK_875bae7e3edcbc630c908297664"`);
        await queryRunner.query(`ALTER TABLE "user_info_exercise_exercise" DROP CONSTRAINT "FK_e5dfb2df88890df7da9fa6174e2"`);
        await queryRunner.query(`ALTER TABLE "user_info_exercise_exercise" DROP CONSTRAINT "FK_616999a98ba69a30028336c2797"`);
        await queryRunner.query(`ALTER TABLE "workout" DROP CONSTRAINT "FK_d1c30d2b5486cc92cefd1a70f4b"`);
        await queryRunner.query(`ALTER TABLE "exercise" DROP CONSTRAINT "FK_f779e20c8324fc65f6d918fc8c0"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP CONSTRAINT "FK_de6d1df17eb875ffe5f1919292e"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP CONSTRAINT "FK_78aabf3f77fc409bbe02a37506c"`);
        await queryRunner.query(`ALTER TABLE "branch" DROP CONSTRAINT "FK_876085341242e41592b0e6b15e0"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP CONSTRAINT "FK_f4bcb0da74674d86807e5f5e584"`);
        await queryRunner.query(`ALTER TABLE "membership" DROP CONSTRAINT "FK_e9c72e8d29784031c96f5c6af8d"`);
        await queryRunner.query(`ALTER TABLE "membership" DROP CONSTRAINT "FK_4591f08f4c89087ab370ab50b11"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP CONSTRAINT "FK_d99f6fdc8cf473b467faa3765d2"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_b3dd4642d1cdd65ce8794876867"`);
        await queryRunner.query(`ALTER TABLE "coupon" DROP CONSTRAINT "FK_05e2d1d174be912392277fc095c"`);
        await queryRunner.query(`ALTER TABLE "survey" DROP CONSTRAINT "FK_a37da0d039df5145bd187a32e09"`);
        await queryRunner.query(`ALTER TABLE "survey" DROP CONSTRAINT "FK_d2e6d31ae1d14fe0ee4266afe6d"`);
        await queryRunner.query(`ALTER TABLE "activity" DROP CONSTRAINT "FK_3571467bcbe021f66e2bdce96ea"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_59b7aed15b632898555d3e9451"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_875bae7e3edcbc630c90829766"`);
        await queryRunner.query(`DROP TABLE "exercise_user_info_user_info"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e5dfb2df88890df7da9fa6174e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_616999a98ba69a30028336c279"`);
        await queryRunner.query(`DROP TABLE "user_info_exercise_exercise"`);
        await queryRunner.query(`DROP TABLE "workoutPlan"`);
        await queryRunner.query(`DROP TABLE "workout"`);
        await queryRunner.query(`DROP TABLE "exercise"`);
        await queryRunner.query(`DROP TABLE "user_info"`);
        await queryRunner.query(`DROP TABLE "company_info"`);
        await queryRunner.query(`DROP TABLE "branch"`);
        await queryRunner.query(`DROP TABLE "promotion"`);
        await queryRunner.query(`DROP TABLE "membership"`);
        await queryRunner.query(`DROP TABLE "announcement"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "coupon"`);
        await queryRunner.query(`DROP TABLE "survey"`);
        await queryRunner.query(`DROP TABLE "marketing"`);
        await queryRunner.query(`DROP TABLE "activity"`);
    }

}
