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
  // Faz o parser do URL separando o caminha (path)
  var parts = url.parse(request.url);
  console.log("parts", parts);
  var path = parts.path;
  console.log("path", path);
  if (request.method == "GET") {
    // GET
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
  } else if (request.method == "POST") {
    // POST
    // Faz a leitura dos dados recebidos por POST
    var body = "";
    request.on("data", function (data) {
      // Concatena os dados recebidos na variável body
      console.log("data", data);
      body += data;
    });
    request.on("end", function () {
      // Configura o tipo de retorno para texto
      response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      // Converte o JSON recebido para objeto
      let calc = JSON.parse(body);
      // Faz a soma e retorna os dados
      let c = calc.a + calc.b;
      response.end("Soma: " + c);
    });
    return;
  }
}

// Cria um servidor HTTP que vai responder "Hello World" a todas as requisições
var server = http.createServer(callback);
// Porta que o servidor vai escutar
server.listen(3000);
// Mensagem ao iniciar o servidor
console.log("Servidor iniciando em http://localhost:3000");
