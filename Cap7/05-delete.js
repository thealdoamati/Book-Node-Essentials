const mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "livro",
  password: "livro123",
  database: "livro",
});
connection.connect();

var sql = "delete from carro where id = ?";
let id = 31;
connection.query(sql, id, function(error, results, field) {
    if(error) throw error
    console.log("Carro deletado com sucesso.")
    console.log("Qtde de registros atualizados: " + results.affectedRows)
})
connection.end()