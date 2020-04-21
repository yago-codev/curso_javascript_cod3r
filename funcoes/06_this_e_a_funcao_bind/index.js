const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao);
  }
}
pessoa.falar();

// Abaixo iremos associar a função falar() do objeto pessoa a uma constante que está sendo declarada no contexto global. 
// Isso irá gerar um conflito, fazendo com que o "this" aponte para "undefined".
// Isso acontece porque a constante a qual a função foi associada tem um "this" apontando para o objeto global, 
// enquanto o this do objeto pessoa está apontando para a "pessoa" em si.
const falar = pessoa.falar
falar(); // conflito entre o paradigma funcional x orientado a objetos

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();
