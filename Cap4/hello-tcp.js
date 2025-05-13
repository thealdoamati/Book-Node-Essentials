var net = require("net")

// Contador de testes
var count = 1

// Listener do servidor TCP quando um cliente conectar
var server = net.createServer(function (socket) {
    // Mensagem de log quando algum cliente contectar
    console.log('Cliente conectou com IP:' + socket.remoteAddress)
    // Escreve a resposta e termina a conexão com o cliente
    socket.end("Hello World TCP:" + (count++) + "\n")
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Servidor TCP ouvindo em 127.0.0.1:3000");
});

console.log("Servidor TCP iniciando...")