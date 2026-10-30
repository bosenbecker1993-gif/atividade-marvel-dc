const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Página inicial – Rota /
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Catálogo de Heróis</title>
        </head>
        <body>
            <h1>Catálogo de Heróis</h1>
            <p>Bem-vindo ao portal oficial dos universos de quadrinhos!</p>
            <nav>
                <a href="/marvel">Marvel</a> | <a href="/dc">DC</a>
            </nav>
            <hr>
            <h3>Personagens em Destaque:</h3>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor (Marvel)</a></li>
                <li><a href="/personagem/marvel/Homem-Aranha">Homem-Aranha (Marvel)</a></li>
                <li><a href="/personagem/dc/Batman">Batman (DC)</a></li>
                <li><a href="/personagem/dc/Superman">Superman (DC)</a></li>
            </ul>
        </body>
        </html>
    `);
});

// 2. Rota da Marvel
app.get('/marvel', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Marvel Comics</title>
        </head>
        <body>
            <h1>Marvel Comics</h1>
            <p>A Marvel é a casa de heróis lendários que lutam para proteger o universo contra ameaças cósmicas e terrestres.</p>
            <h3>Personagens Disponíveis:</h3>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a></li>
            </ul>
            <br>
            <a href="/">Voltar para a Página Inicial</a>
        </body>
        </html>
    `);
});

// 2. Rota da DC
app.get('/dc', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>DC Comics</title>
        </head>
        <body>
            <h1>DC Comics</h1>
            <p>A DC Comics é o lar de ícones justiceiros lendários que defendem cidades como Gotham e Metrópolis.</p>
            <h3>Personagens Disponíveis:</h3>
            <ul>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
            </ul>
            <br>
            <a href="/">Voltar para a Página Inicial</a>
        </body>
        </html>
    `);
});

// 3. Rota com dois parâmetros obrigatórios (:empresa e :nome)
app.get('/personagem/:empresa/:nome', (req, res) => {
    const empresa = req.params.empresa.toUpperCase();
    const nome = req.params.nome;

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Detalhes do Personagem</title>
        </head>
        <body>
            <h1>Detalhes do Personagem</h1>
            <p><strong>Empresa:</strong> ${empresa}</p>
            <p><strong>Nome do Personagem:</strong> ${nome}</p>
            <br>
            <a href="/">Voltar para a Página Inicial</a>
        </body>
        </html>
    `);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
