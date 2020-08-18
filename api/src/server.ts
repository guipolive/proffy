import express from 'express'; // Importando o express
import routes from '../routes'; // Importando as rotas

const app = express(); /* Utilizando o express na nossa aplicação */

app.use(express.json()); /* Permite que o express passe a entender json */
app.use(routes);


app.listen(3333); /* Nos permite ouvir requisições HTTP */

console.log('Servidor inicializado com sucesso');