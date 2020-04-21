class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const pessoa1 = new Pessoa('João da Classe');
pessoa1.falar();

const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  }
}

const pessoa2 = criarPessoa('Joãozinho da função construtora');
pessoa2.falar();