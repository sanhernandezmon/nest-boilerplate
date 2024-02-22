import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1708623255747 implements MigrationInterface {
    name = 'InitMigration1708623255747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "animal" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_af42b1374c042fb3fa2251f9f42" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "animal"`);
    }

}
