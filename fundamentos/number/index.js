const peso1 = 1.0; // forma tradicional de declarar tipo number. 
const peso2 = Number('2.0'); // forçando a tipagem através da função Number()

console.log(peso1, peso2);

// a partir de Number, teremos diversas funções para trabalharmos com tipos numéricos.
// Number.isInteger() irá retornar true para números inteiros.
// OBS: 1.0, 2.0, 3.0, 4.0... qualquer número que terminar em (.0) será considerado inteiro
console.log(Number.isInteger(peso1));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media); // resultado = 7.8709999999999996

// formatando casas decimais através da função toFixed()
// a função toFixed() irá receber como parâmetro o número de casas decimais que serão exibidas após o ponto:
console.log(media.toFixed(2)); // resulado = 7.87;

// convertendo valor numérico em string:
console.log(media.toString());

// convertendo para valor binário:
console.log(media.toString(2)); // resultado = 111.11011110111110011101101100100010110100001110010101

console.log(typeof media); // resultado = number
console.log(typeof Number); // resultado = função