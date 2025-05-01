function objeto1() {
  var pessoa = Object();
  pessoa.nome = "Aldo";
  pessoa.hello = function () {
    return "Hello World";
  };
  console.log(pessoa);
  console.log(pessoa.nome);
  console.log(pessoa.hello());
}
objeto1();

function objeto2() {
  var pessoa = {
    nome: "Aldo",
    hello: function () {
      return "Hello World";
    },
  };
  console.log(pessoa);
  console.log(pessoa.nome);
  console.log(pessoa.hello());
}
objeto2();

function Pessoa1() {
  this.nome = "Aldo";
  this.hello = function () {
    return "Hello World";
  };
}

function objeto3() {
  var pessoa = new Pessoa1();
  console.log(pessoa);
  console.log(pessoa.nome);
  console.log(pessoa.hello());
}
objeto3();

class Pessoa2 {
  constructor() {
    this.nome = "Aldo";
  }
  hello() {
    return "Hello World";
  }
}

function objeto4() {
  var pessoa = new Pessoa2();
  console.log(pessoa);
  console.log(pessoa.nome);
  console.log(pessoa.hello());
}

objeto4();

class Pessoa3 {
    static hello() {
        return "Hello World"
    }
}
console.log("Pessoa3", Pessoa3.hello())
