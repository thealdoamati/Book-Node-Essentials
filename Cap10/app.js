let express = require("express");
let app = express();
let bodyParser = require("body-parser");
// Configura ler dados do POST por form-urlencoded e application/json
app.use(bodyParser.urlencoded({ extendend: false }));
app.use(bodyParser.json());

// Configura rota na raiz
app.get("/", function (req, res) {
  res.send("API dos Carros");
});

// GET em /carros
app.get("/carros", function (req, res) {
  res.send("Lista de todos os carros aqui");
});

// GET em carros/esportivos
app.get("/carros/:tipo", function (req, res) {
  let tipo = req.params.tipo;
  res.send("Lista dos carros: " + tipo);
});

// Inicia o servidor
let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Servidor iniciado em http://%s%s", host, port);
});
