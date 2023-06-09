const express = require('express');

require('./config/db');

const app = express();
const router = require('./routes/');

app.get('/', (req, res) => {
  res.send({message: 'Seja bem vindo a API!'});
});

app.use(express.json());
app.use('/api/v1', router);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
