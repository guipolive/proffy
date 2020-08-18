import express from 'express';
import db from './src/database/connection';

const routes = express.Router();

routes.get('/', (req, res) => {
    const test = {
        message: 'Hello World'
    }
        res.send(test);
}); /* Declarando uma rota de teste */

routes.post('/classes', async (req, res) => {
    // const data = req.body;

    const {
        name,
        avatar, 
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = req.body;

    await db('users').insert({
        name,
        avatar,
        whatsapp,
        bio
    });

    // console.log(data);

    return res.send('ok');
});

export default routes;







// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Body: Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query params: Paginação, filtros, ordenação