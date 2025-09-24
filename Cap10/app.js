let express = require("express");
let app = express();
let bodyParser = require("body-parser");

const CarroDb = require("./CarroDB");

// Configura ler dados do POST por form-urlencoded e application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configura rota na raiz
app.get("/", function (req, res) {
  res.send("API dos Carros");
});

// GET em /carros
app.get("/carros", function (req, res) {
  CarroDb.getCarros(function (carros) {
    res.json(carros);
  });
});

// GET em carros/id (Tem que vir antes do tipo, pois o id é number)
app.get("/carros/:id", function (req, res) {
  let id = req.params.id;
  CarroDb.getCarrosById(id, function (carros) {
    res.json(carros);
  });
});

// DELETE em /carros/id
app.delete("/carros/:id", function (req, res) {
  let id = req.params.id;
  console.log("deletar carro " + id);
  CarroDb.delete(id, function (affectedRows) {
    res.json({ msg: "Carro deletado com sucesso." });
  });
});

// GET em carros/esportivos
app.get("/carros/:tipo", function (req, res) {
  let tipo = req.params.tipo;
  CarroDb.getCarrosByTipo(tipo, function (carros) {
    res.json(carros);
  });
});

app.post("/carros", function (req, res) {
  let carro = req.body;
  CarroDb.save(carro, function (carro) {
    res.json(carro);
  });
});

app.put("/carros", function (req, res) {
  let carro = req.body;
  CarroDb.update(carro, function (carro) {
    // res.json(carro);
    res.json({ msg: "Carro atualizado com sucesso." });
  });
});

// Inicia o servidor
let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Servidor iniciado em http://%s%s", host, port);
});
