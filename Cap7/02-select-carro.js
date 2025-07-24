const mysql = require("mysql2");

// Cria conexão com MySQL
var connection = mysql.createConnection({
  host: "localhost",
  user: "livro",
  password: "livro123",
  database: "livro",
});
// Conecta no banco de dados
connection.connect();

let sql = "select id,nome,tipo from carro where id = ?";
let id = 11;

connection.query(sql, id, function (error, results, fields) {
  if (error) throw error;
  if (results.length == 0) {
    console.log("Nenhum carro ecnontrado.");
    return;
  }
  // O carro esta na 1a posição do array
  let carro = results[0];
  console.log(carro.id + ": " + carro.nome);
});

connection.end();

const CarroDB = require('./CarroDB')
CarroDB.getCarrosById(11, function(carro) {
  console.log(carro.id + " : " + carro.nome)
})