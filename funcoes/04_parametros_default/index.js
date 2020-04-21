// Estratégia 1 para setar valor padrão no parâmetro da função
// Problema da estratégia: quando passarmos o valor 0 como parâmetro, ele será interpretado como false, 
// portanto não conseguiremos utilizar-los aplicando essa estratégia.
function soma1(a, b, c) {
  // se o usuário passar o parâmetro a, ele será atribuído a variável,
  // se ele não passar, setaremos o valor 1;
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}
console.log(soma1(), soma1(3), soma1(0, 0, 0));

// Estratégias 2, 3 e 4 para gerar valor padrão para os parâmetros da função:
function soma2(a, b, c) {
  // Estratégia 2: condição ternária
  a = a !== undefined ? a : 1;
  // Estratégia 3: iremos acessar os argumentos da função, verificando se o índice 1 está presente
  b = 1 in arguments ? b : 1;
  // Estratégia 4: verificando se o parâmetro é do tipo "isNaN".
  // se ele for do tipo "isNaN", significa que não passamos parâmetro algum, portanto setaremos o 1 como default. 
  // se for diferente de "isNaN", significa que o parâmetro foi especificado, portanto o retornaremos. 
  // ESSA É A MELHOR ESTRATÉGIA DENTRE AS OUTRAS MENCIONADAS.
  c = isNaN(c) ? 1 : c;

  return a + b + c;
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

// Setando padrâmetro default através da feature do ES6:
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));
