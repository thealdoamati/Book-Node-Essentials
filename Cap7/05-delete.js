const mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "livro",
  password: "livro123",
  database: "livro",
});
connection.connect();

// var sql = "delete from carro where id = ?";
// let id = 31;
// connection.query(sql, id, function(error, results, field) {
//     if(error) throw error
//     console.log("Carro deletado com sucesso.")
//     console.log("Qtde de registros atualizados: " + results.affectedRows)
// })
// connection.end()

const CarroDB = require('./CarroDB')
var carro = { id:31 }
CarroDB.delete(carro, function(carro) {
  console.log("Carro " + carro.id + " : " + carro.nome + " deletado com sucesso")
})