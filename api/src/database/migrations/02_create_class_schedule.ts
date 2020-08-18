import Knex from 'knex';

// Quais alterações vamos atualizar no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table =>{
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            // Reflete as alterações em formato cascata ao fazer update em uma
            // aula
            .onUpdate('CASCADE')
            // Deleta as aulas do professor em formato cascata ao deletar uma aula
            .onDelete('CASCADE'); 
    })
}

// Em caso de erro, fazer isso
export async function down(knex: Knex) {
    knex.schema.dropTable('class_schedule');
}