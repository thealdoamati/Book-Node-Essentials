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

let sql = "update carro set ? where id = ?";
var json = { id: 31, nome: "Meu Carro Update", tipo: "esportivos" };
var id = json.id;

connection.query(sql, [json, id], function (error, results, field) {
  if (error) throw error;
  console.log("Carro atualizado com sucesso.");
  console.log("Qtde de registros atualizados: " + results.affectedRows);
});
connection.end();
