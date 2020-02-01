// ES2018 : Object.values / Object.keys
const obj = {
  a: 1,
  b: 2, 
  c: 3
}
// Object.values() irá receber um objeto como parâmetro e irá retornar um array contendo os valores de cada chave do objeto. 
console.log(Object.values(obj));

// Object.keys() irá receber um objeto como parâmetro e irá retornar um array contendo as chaves do objeto. 
console.log(Object.keys(obj));

// Object.entries() irá receber um objecto como parâmetro e irá retornar um array de array para cada chave/valor.
console.log(Object.entries(obj));


// Melhorias na Notação Literal de Objetos:
const nome = 'Carla';
const pessoa = {
  // antes do ES2018, quando fossemos passar uma constante para um objeto, precisávamos declarar: nome: nome,
  // mas agora isso não é mais necessário, pois basta declarar a variável que será inserida no objeto e
  // o próprio ES/JS sa encarregará de setar o nome da constante como propriedade e o valor será setado automaticamente. 
  nome,
  // além disso, a sintaxe de função também ficou mais simples de ser declarada dentro dos objetos, 
  // bastando passar o nome da função, omitindo a palavra reservada function.
  ola() {
    return 'olá'
  },
}
console.log(pessoa.nome, pessoa.ola());

// Classes:
class Animal {}
class Cachorro extends Animal {
  falar() {
    return 'Au au!';
  }
}
console.log(new Cachorro().falar());