const express = require('express');

require('./config/db');

const app = express();

app.get('/', (req, res) => {
  res.send({message: 'Seja bem vindo a API!'});
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
