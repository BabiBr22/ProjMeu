//importa o express
const express = require('express');

//inicializa o servidor
const app= express();
const PORT = 3000; //Define a porta onde o servidor irá rodar

//Rota principal (exibe uma mensagem quando acesar localhost:3000)
app.get('/', (req, res) => {
    res.send('Servidor rodando! Bem-vindo')
});

// Rota de exemplo (outro caminho)
app.get('/sobre', (req, res) => {
    res.send('Esta é a página Sobre.');
  });

app.get('/api', (req, res) => {
    res.json({
        message: 'Bem-vindo á API!',
        status: 'Servidor rodando',
        data: [1, 2, 3, 4]
    });
}) ;


// Inicia o servidor na porta especifica
app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});