import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateShorteners1614172231263 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'shorteners',
                columns: [
                    {
                        name: 'id',
                        type: 'bigint',
                        isPrimary: true,   
                        isGenerated: true,
                        generationStrategy: 'increment',                   
                    },
                    {
                        name: 'url',
                        type: 'varchar',
                    },
                    {
                        name: 'code',
                        type: 'varchar',
                    },
                    {
                        name: 'expires',
                        type: 'varchar',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('shorteners');
    }

}
