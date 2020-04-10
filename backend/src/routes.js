/*
Rota/ Recursos
*/

/*
Métodos HTTP:

GET: Buscar uma informação do backend
POST: Criar uma informação no backend
PUT: Alterar uma informação no backend
DELETE: Deletar uma informação no backend
*/

/*
Tipos de parâmetros

Query Params: Parâmetros nomeados enviados na rota após "?" (ex: filtros, paginação...)
Route Params: Parâmetros utilizados para identificar recursos ":"
Raquest Body: Corpo da requisição, utilizado para criar ou alterar recursos.
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */


const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Cria uma sessão
routes.post('/sessions', SessionController.create);

//Retorna todas as ongs
routes.get('/ongs', OngController.index);
//Add ong no db
routes.post('/ongs', OngController.create);

//Retorna todas os incidentes de uma ong específica
routes.get('/profile', ProfileController.index);

//Retorna todos os incidents
routes.get('/incidents', IncidentController.index);
//Add incident
routes.post('/incidents', IncidentController.create);
//Remove incident
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes; //Exportar variável de dentro de um arquivo
