import Knex from 'knex';

// Quais alterações vamos atualizar no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table =>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

// Em caso de erro, fazer isso
export async function down(knex: Knex) {
    knex.schema.dropTable('users');
}