// arrow function
// características: funções arrow são sempre anonimas, portanto sempre iremos atribuir-las a variáveis, contantes... portanto a função será evocada através da variável
// características: quando a arrow function tiver corpo {}, deveremos obrigatoriamente utilizar o return para retornar os dados
// benefícios: sintaxe reduzida, 
const soma = (a, b) => a + b;
console.log(soma(1, 1));

// arrow function (this)
// o this da arrow function possui contexto léxico
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// parâmetros default: setando um valor padrão para um parâmetro de uma função:
function log(texto = 'Node') {
  console.log(texto);
}
log(); // irá imprimir o valor padrão que foi definido no parâmetro
log(undefined); // irá imprimir o valor padrão que foi definido no parâmetro
log(null); // não vai assumir o valor padrão, tendo em vista que estamos explicitando que queremos um valor nulo
log('Sou mais forte'); // irá se sobrepor ao valor que foi setado por padrão no parâmetro

// operador Rest
// esse mesmo operador por ser chamado de Rest ou Spread, dependendo do contexto
// rest irá agrupar dados
// spread irá espalhar os dados
// no contexto de arrays e objetos nós utilizaremos o spread;
// no contexto das funções, utilizamos rest
// como o rest funciona? a ideia do rest é termos parâmetros variáveis, ou seja, iremos colocar vários parâmetros na chamada da função, 
// e esses parâmetros serão agrupados em um array, internamente dentro função 
function total(...numeros) {
  let total = 0;
  numeros.forEach(n => total += n);
  return total;
}
console.log(total(2, 3, 4, 5));

// OBS: se analisarmos a função acima, utilizamos o operador REST para AGRUPAR os dados que foram passados como parâmetros pra função total, 
// caso não estivéssemos utilizando o operador REST, ficaríamos restritos a passar somente um parâmetro na chamada da função. 
// Ou seja, o operador REST acabou criando um array interno na nossa função, recebendo todos os dados que foram passados em total(2, 3, 4, 5);