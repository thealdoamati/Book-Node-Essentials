const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'livro',
  password: 'livro123',
  database: 'livro'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar:', err);
    return;
  }
  console.log('Conectado ao MySQL com sucesso!');
});

connection.query('SELECT id, nome, tipo FROM carro', (err, results, fields) => {
  if (err) {
    console.error('Erro na query:', err);
    return;
  }
  console.log(results);
  connection.end();
});
