var http = require("http");
var url = require("url");
var fs = require("fs");

// Função para ler arquivo e devolve-lo no response
function readFile(response, file) {
  // Faz leitura de arquivo de forma assíncrona
  fs.readFile(file, function (err, data) {
    // Quando ler, escreve na response o conteúdo do arquivo JSON
    response.end(data);
  });
}

var callback = function (request, response) {
  // Header com tipo de resposta + UTF-8 como charset
  response.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });

  // Fazer parser de URL separando rotas
  var parts = url.parse(request.url);
  if (parts.path == "/carros/classicos") {
    readFile(response, "carros_classicos.json");
  } else if (parts.path == "/carros/esportivos") {
    readFile(response, "carros_esportivos.json");
  } else if (parts.path == "/carros/luxo") {
    readFile(response, "carros_luxo.json");
  } else {
    response.end("Path não mapeado: " + parts.path);
  }
};

var server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado em http://localhost:3000");
