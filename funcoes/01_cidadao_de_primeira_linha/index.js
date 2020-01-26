/*
  O JS trata as funções como cidadãos de primeira linha (first-class object/citizens)
  Isso significa que conseguimos passar uma função como parâmetro pra outra função, 
  conseguimos retornar uma função dentro de outra função, 
  conseguimos declarar uma função dentro de outra função, 
  conseguimos criar funções de forma literal, que é a forma padrão de se criar funções,
  conseguimos armazenar função dentro de variáveis...
  Isso acaba por abrir um leque de possibilidades imenso.
*/

// criando função de forma literal 
function fun1 () { }

// criando função, armazenando-a em uma variável
const fun2 = function () {  }

// criando função em um array
const array = [ function ( a, b ) { return a + b; }, fun1, fun2 ];
console.log(array[0](2, 3));

// armazenando função em atributo de um objeto
const obj = {};
obj.falar = function () { return 'opa' }
console.log(obj.falar());

// passar função como parâmetro em outra função
function run (fun) {
  fun ();
}
run( function () { console.log('Executando...'); });

// retornando função dentro de outra função
function soma ( a, b ) {
  return function ( c ) {
    console.log(a + b + c);
  }
}
soma(2, 3)(4);

// outra forma de executar
const cincoMais = soma(2, 3);
cincoMais(4);

