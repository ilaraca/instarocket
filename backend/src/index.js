require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

mongoose
  .connect('mongodb://localhost/instarock', { useNewUrlParser: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

app.use(cors()); // todo tipo de aplicação ter acesso ao backend
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));
app.use(require('./routes'));
// app.listen(3333);

module.exports = app;

// middleware - é toda função que sempre recebe req, res e torna alguma coisa. Interceptador de chamadas
// e requisições.
// biblioteca multer é uma biblioteca que lida lida com esses corpos de multi-part form data e automatiza
// processos de upload de arquivos.
// express não vem com uma maneira padrão que consegue pegar os valores dentro do corpo da requisição
// em multi-part form data, por exemplo
// cors - permite que o backend seja acessível em react mesmo estando em domínios diferentes
