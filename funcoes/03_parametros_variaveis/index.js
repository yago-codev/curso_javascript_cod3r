// As funções possuem parâmetros variáveis, 
// ou seja, podemos passar parâmetros mesmo que na declaração da função eles não estejam presentes.

function soma() {
  let soma = 0;

  for (i in arguments) {
    soma += arguments[i]
  }

  return soma;
}

console.log(soma()); // retorna 0
console.log(soma(10)); // retorna 10
console.log(soma(1.1, 2.2, 3.3)); // retorna a soma de todos os parâmetros: 6.6
console.log(soma(1.1, 2.2, 'Teste')); // retorna a soma dos dois primeiros parâmetros, concatenados com Teste
console.log(soma('a', 'b', 'c')); // retorna '0abc'
