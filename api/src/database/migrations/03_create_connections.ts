import Knex from 'knex';

// Quais alterações vamos atualizar no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table =>{
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            // Reflete as alterações em formato cascata ao fazer update em um
            // professor
            .onUpdate('CASCADE')

        table.timestamp('created_at')
            .defaultTo('now()')
            .notNullable();
    })
}

// Em caso de erro, fazer isso
export async function down(knex: Knex) {
    knex.schema.dropTable('connections');
}