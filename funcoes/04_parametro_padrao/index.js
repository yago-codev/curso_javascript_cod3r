// estrategia 1 para gerar valor/parâmetro padrão
function soma1 (a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}
console.log(soma1());
console.log(soma1(), soma1(3));
console.log(soma1(), soma1(3), soma1(1, 2, 3));
// efeito colateral da estratégia demonstrada acima:
// como estamos utilizando condições booleanas para criar os valores padrões,
// teremos um problema quando o valor de entrada da função for igual a zero,
// pois 0 || 1 vai retornar false, fazendo com que o parâmetro assuma o valor 1
console.log(soma1(0, 0, 0));

// estratégia 2, 3, 4 para gerar valor/parâmetro padrão
function soma2 (a, b, c) {
  // 2
  a = a !== undefined ? a : 1;
  // 3
  // 1 in arguments
  // aqui nós temos uma condição, onde estamos perguntando se dentro dos parâmetros(arguments) da função existe o índice 1,
  // já que o parâmetro b é o segundo argumento da função
  b = 1 in arguments ? b : 1;
  // 3
  // se não passarmos nenhum valor como o terceiro argumento pra função, ele será considerado como NaN
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

// estratégia utilizando o recurso de valor padrão do ES2015
function soma3 (a = 1, b = 1, c = 1) {
  return a + b + c;
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma2(0, 0, 0));