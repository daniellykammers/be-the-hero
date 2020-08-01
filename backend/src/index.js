const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/*
TIPO DE PARÂMETROS

-Query Params: Parâmetros enviados na rota após ? (filtros, paginação)
-Route Params: Parâmetros utilizado para identificar recursos
-Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Serer/
NoSQL: MongoDB, CouchDB/

Tipos de conexão:
Driver do Banco de dados: SELECT * DROM table
Query Builder: table('users').select('*').where
*/