var mysql = require("mysql2");

class CarroDB {
  // Função para conectar no banco de dados
  static connect() {
    var connection = mysql.createConnection({
      host: "localhost",
      user: "livro",
      password: "livro123",
      database: "livro",
    });
    connection.connect();
    return connection;
  }

  // Retorna a lista de carros
  static getCarros(callback) {
    let connection = CarroDB.connect();
    // Cria uma consulta
    let sql = "select * from carro";
    let query = connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      // Retorna os dados pela função de callback
      callback(results);
    });
    console.log(query.sql);
    connection.end();
  }

  static getCarrosByTipo(tipo, callback) {
    let connection = CarroDB.connect()
    // Cria uma consulta
    let sql = "select id,nome,tipo from carro where tipo = '" + tipo + "'"
    let query = connection.query(sql, function (error, results, fields) {
        if(error) throw error
        callback(results)
    })
    console.log(query.sql)
    connection.end()
  }

  static getCarrosById(id, callback) {
    let connection = CarroDB.connect()
    let sql = "select * from carro where id=?"
    let query = connection.query()
  }
}
