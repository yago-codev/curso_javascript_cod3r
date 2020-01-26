// imprimindo uma função padrão antes mesmo de sua própria declaração
// porque isso é possível?
// o js lê todo o script, carregando as funções imediatamente
console.log(soma(2, 2));

// function declaration (padrão)
function soma(x, y) {
  return x + y;
}

// function expression: atribuindo uma função a uma variável
const sub = function(x, y) {
  return x - y;
}
console.log(sub(2, 2));

// named function expression
const mult = function mult(x, y) {
  return x * y;
}

console.log(mult(2, 2));
