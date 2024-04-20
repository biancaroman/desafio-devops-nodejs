const http = require('http');

// Definindo a mensagem 
const mensagem = '<h1>Implantacao efetuada com sucesso. Bom trabalho!</h1>';

// Criando um servidor HTTP
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(mensagem);
});

// Definindo a porta 
const PORT = process.env.PORT || 3000;

// Iniciando o servidor e escutando na porta especificada
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
