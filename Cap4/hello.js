var http = require("http");
var url = require("url");

var callback = function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });

  // Fazer parser de URL separando rotas
  var parts = url.parse(request.url);
  if (parts.path == "/") {
    response.end("Site na raiz.");
  } else if (parts.path == "/carros") {
    response.end("Você entrou na rota de /carros.");
  } else {
    response.end("Rota inválida: " + parts.path);
  }
};

var server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado em http://localhost:3000");
