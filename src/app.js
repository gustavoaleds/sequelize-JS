const express = require('express');

require ('express-async-errors');

require('./config/db');

const app = express();
const router = require('./routes/');

app.get('/', (req, res) => {
  res.send({message: 'Seja bem vindo a API!'});
});

app.use(express.json());
app.use('/api/v1', router);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send({
    error: err.message, });
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
