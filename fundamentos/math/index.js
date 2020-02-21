const raio = 5.6;

// abaixo utilizaremos o Math para realizar uma operação matemática:
// Math.PI = vai retornar o valor de PI, como esperado.
// Math.pow() = operador de exponenciação, vai receber dois parâmetros:
// o primeiro parâmetro é o alvo da operação,
// o segundo parâmetro é operando. 
const area = Math.PI * Math.pow(raio, 2); // PI multiplicado pelo valor do raio ao quadrado.

console.log(area); // resultado = 98.5203456165759
console.log(typeof Math); // Objeto