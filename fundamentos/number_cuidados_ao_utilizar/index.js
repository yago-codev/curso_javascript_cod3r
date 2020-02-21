console.log(7 / 0); // resultado = Infinity

// a string '10' será convertida pra number
console.log('10' / 2); // resultado = 5

console.log('Show' * 2); // resultado = NaN(Not a Number)

console.log(0.1 + 0.7); // resultado = 0.7999999999999999

// Só conseguimos acessar as funções do tipo number quando estamos usando a função Number
// console.log(10.toString()); // vai retornar erro

// Se não utilizarmos a função Number diretamente,
// poderemos envolver os valores em parênteses para termos acesso a elas:
console.log((10).toString()); // estratégia pra acessar as funções presentes em Number
console.log((10).toFixed(2)); // resultado = 10.00
console.log((10.345).toFixed(2)); // vai arredondar pra 10.35