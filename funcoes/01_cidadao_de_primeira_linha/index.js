// Função em JS é First-Class Object (Citizens)
// No paradigma funcional isso é nomeado como "High-Order Function"

// Alguns Tipos de Usos de Funções:

// Criando Função de Forma Literal:
function fun1() { }

// Armazenando Função em Variável:
const fun2 = function () { }

// Armazenando Função em Array:
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenando Função em um Atributo de Objeto:
const obj = {}
obj.falar = function () { return 'Opa' };
console.log(obj.falar());

// Passando Função como Parâmetro pra outra Função:
function run(fun) {
  fun()
}
run(function () { console.log('Executando ...') })

// Retornando Função dentro de Função:
function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}
soma(1, 2)(3)
const cincoMais = soma(2, 3)
cincoMais(4)