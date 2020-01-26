const pessoa = {
  saudacao: 'Bom dia',
  falar () {
    console.log(this.saudacao);
  }
}
pessoa.falar();

// agora o this não vai mais estar se referindo ao dono do objeto(pessoa), mas sim a constante falar
const falar = pessoa.falar
falar();

// "amarrando" o this através da função bind
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();