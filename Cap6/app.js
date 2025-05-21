var http = require("http");
var url = require("url");

// Função de callback para o servidor HTTP
function callback(request, response) {
  // Faz o parser do URL separando o caminho (path)
  var parts = url.parse(request.url)
  var path = parts.path
  // Verifica o path
  if(path == '/teste') {
    response.end("Vamos estudar JSON!")
  } else {
    response.end(`Not found: ${path}`)
  }
}

// Cria um servidor HTTP que vai responder "Hello Word" para todas as requisições
var server = http.createServer(callback)

server.listen(3000)

console.log("Servidor iniciado em http://localhost:3000/")