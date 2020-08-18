import Knex from 'knex';

// Quais alterações vamos atualizar no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table =>{
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            // Reflete as alterações em formato cascata ao fazer update em um
            // professor
            .onUpdate('CASCADE')
            // Deleta as aulas do professor em formato cascata ao deletar o user
            // professor
            .onDelete('CASCADE'); 
    })
}

// Em caso de erro, fazer isso
export async function down(knex: Knex) {
    knex.schema.dropTable('classes');
}