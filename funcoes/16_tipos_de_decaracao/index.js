// É possível chamar a função antes da sua declaração, 
// porque a Engine do JS primeiramente irá gravar tudo em memória, 
// disponibilizando o acesso a função dentro do console.log().
// 
// Executar a função antes da sua declaração só irá funcionar no caso das Functions Declarations, 
// que são as funções tradicionais. 
console.log(soma(2, 3));

// Function Declaration (forma tradicional de declarar funções):
function soma(x, y) {
  return x + y;
}

// Function Expression (será atribuída a uma variável):
const sub = function (x, y) {
  return x - y;
}
console.log(sub(5, 3));

// Named Function Expression
// Essa forma de declarar funções é pouco usada, porque ñ faz sentido atribuir o nome 
// em uma função que será atribuída a uma variável. 
// Geralmente esse tipo de abordagem é utilizada para poder debugar as funções através do seu nome.
const mult = function mult(x, y) {
  return x * y;
}
console.log(mult(2, 2));