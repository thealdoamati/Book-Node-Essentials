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

let sql = "insert into carro set ? ";
var carro = { nome: "Meu Carro", tipo: "esportivos" };

connection.query(sql, carro, function (error, results, field) {
  if (error) throw error;
  console.log("Carro salvo com sucesso, id: " + results.insertId);
});
connection.end();
