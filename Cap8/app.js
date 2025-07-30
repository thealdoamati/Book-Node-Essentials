var http = require("http");
var url = require("url");

const CarroDb = require("./CarroDB");

// Consulta os carros pelo tipo e retorn o JSON na resposta
function getCarros(response, tipo) {
  // Busca carros no banco
  CarroDb.getCarrosByTipo(tipo, function (carros) {
    // Converte array de carros para JSON
    var json = JSON.stringify(carros);
    // ENvia JSON como resposta
    response.end(json);
  });
}

// FUnção de callback para o servidor HTTP
function callback(request, response) {
  if (request.method == "GET") {
    // GET
  } else if (request.method == "POST") {
    // POST
  }
  // Faz o parser do URL separando o caminha (path)
  var parts = url.parse(request.url);
  var path = parts.path;
  // Configura o tipo de retorno para application/json
  response.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });
  // Verifica o path
  if (path == "/carros/classicos") {
    getCarros(response, "classicos");
  } else if (path == "/carros/esportivos") {
    getCarros(response, "esportivos");
  } else if (path == "/carros/luxo") {
    getCarros(response, "luxo");
  } else {
    response.end("Not found: " + path);
  }
}

// Cria um servidor HTTP que vai responder "Hello World" a todas as requisições
var server = http.createServer(callback);
// Porta que o servidor vai escutar
server.listen(3000);
// Mensagem ao iniciar o servidor
console.log("Servidor iniciando em http://localhost:3000");
