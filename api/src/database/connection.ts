import knex from 'knex'; /* Importando o ORM Knex */
/* 
    Importando o módulo integrado do node path para tratarmos caminhos de rotas
    na nossa aplicação
*/
import path from 'path'; 

// Utilizaremos migrations para controlarmos a versão do banco de dados

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;