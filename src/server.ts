import express from 'express';

const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover uma informação
 * PATCH  => Alterar uma informação (+específica)
 */

app.get('/', (req, res) => {
  return res.send('Sempre começar é uma coisa difícil')
});

app.post('/post', (req, res) => {
  return res.send('Método Post')
})

app.listen(5500, () => {
  console.log("Server rodando na porta 5500\nhttp://localhost:3000");
})