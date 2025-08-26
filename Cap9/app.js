let express = require("express");
let app = express();

// Configura uma rota na raiz
app.get("/", function (req, res) {
  res.json({nome: 'Ricardo', sobrenome: 'Lecheta'})
});

app.get("/pessoa", function (req, res) {
	let nome = req.query.nome;
	let sobrenome = req.query.sobrenome;
	res.status(200).type("text")
	res.send(nome + " " + sobrenome)
})

app.get("/pessoa/:id", function (req, res) {
	let id = req.params.id;
	res.send("Buscar a pessoa " + id);
})

app.get("/pessoa/nome/:nome/sobrenome/:sobrenome", function (req, res) {
	let nome = req.params.nome
	let sobrenome = req.params.sobrenome
	res.send(nome + " " + sobrenome)
})

// Inicia o servidro
let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Servidor iniciado em http://%s:%s", host, port);
});
