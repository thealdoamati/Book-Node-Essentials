var http = require("http");
var url = require("url");

// Função de callback para o servidor HTTP
function callback(request, response) {
  // Faz o parser do URL separando o caminho (path)
  var parts = url.parse(request.url)
  var path = parts.path
  // Configura o tipo de retorno para json
  response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})
  // Verifica o path
  if(path == '/teste') {
    response.end("{\"nome\":\"Ricardo\",\"sobrenome\":\"Lecheta\"}")

  } else if(path == '/teste2') {
    var pessoa = { 'nome': 'Aldo', 'sobrenome': 'Amati'}
    var json = JSON.stringify(pessoa)
    response.end(json)

  } else if(path == '/teste3') {
    var pessoas = []
    var p1 = { 'nome': 'Aldo', 'sobrenome': 'Amati'}
    var p2 = { 'nome': 'João', 'sobrenome': 'Kuan'}
    pessoas.push(p1)
    pessoas.push(p2)
    var json = JSON.stringify(pessoas)
    response.end(json)

  } else {
    response.end(`Not found: ${path}`)

  }
}

// Cria um servidor HTTP que vai responder "Hello Word" para todas as requisições
var server = http.createServer(callback)

server.listen(3000)

console.log("Servidor iniciado em http://localhost:3000/")