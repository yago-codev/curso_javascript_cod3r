// let e const
{
  var a = 2;
  let b = 3;
  console.log(b);
}
console.log(a);
// console.log(b); // não é possível acessar let b porque a palavra reservada let possui escopo de bloco

// template string
const produto = 'iPad';
console.log(
  `${produto} 
  é 
  caro!`);

// destructuring -> através do destructuring é possível desestruturar variáveis, arrays, objetos, capturando os dados desejados:
// no exemplo abaixo estamos criando um array constante, capturando os dados da string 'Cod3r', e associando aos índices que foram criados no array.
// o índice l[0] = 'C'
// o índice e[1] = 'o'
// e por fim utilizamos o operador spread para pegar o restante das letras da string, ou seja, 'd3r';
const [l, e, ...tras] = 'Cod3r';
console.log(typeof l);
console.log(typeof e);
console.log(typeof tras);
console.log(l, e, tras);

const [x, , y] = [1, 2, 3]; // utilizando a destruturação pra pegar somente o índice 0 e o índice 2 do array [1, 2, 3]
console.log(x, y);

// desestruturando atributos de objetos
const {idade, nome} = {nome: 'Ana', idade: 9};
console.log(idade, nome);

// renomeando os atributos da desestruturação
const {idade2: idade1, nome2: nome1} = {nome2: 'João', idade2: 22}
console.log(idade1, nome1);

// quando formos desestruturar uma string, utilizaremos colchetes: const [x, , y] = [1, 2, 3];
// quando formos desestruturar um array, utilizaremos colchetes: const [x, , y] = [1, 2, 3];
// quando formos desestruturar um objeto, utilizaremos chaves: const {idade, nome} = {nome: 'Ana', idade: 9};