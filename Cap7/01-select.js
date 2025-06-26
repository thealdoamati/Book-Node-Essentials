var mysql = require("mysql");

// Cria conexão com MySQL
var connection = mysql.createConnection({
  host: "localhost",
  user: "livro",
  password: "livro123",
  database: "livro",
});
// Conecta no banco de dados
connection.connect();

let sql = "select id,nome,tipo from carro";
connection.query(sql, function (error, results, fields) {
  // A função de callback possui 3 parâmetros:
  // error: erro caso a consulta SQL seja inválida, por exemplo um erro de sintaxe
  //results: contém os registros retornados pela consulta, neste caso será a lista de carros
  // fields: contém informações sobre as colunas retornadas, nesse exemplo as colunas id, nome e tipo.
  if (error) throw error;
  let carros = results;
  for (let i = 0; i < carros.length; i++) {
    console.log(carros[i].id + ": " + carros[i].nome)
  }
});
// Fecha a conexão
connection.end();
