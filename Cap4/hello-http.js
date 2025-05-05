var http = require("http")

var server = http.createServer(function (request, response) {
    // Define o header com o tipo da resposta
    response.writeHead(200, {"Content-Type": "text/plain"})
    // Mensagem de retorno
    response.end("Hello World Node!\n")
})

// Porta que o servidor vai escutar
server.listen(3000)
// Mensagem ao iniciar servidor
console.log("Servidor iniciado em http://localhost:3000")