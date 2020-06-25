// criando um objeto a partir de uma constante
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa = { nome: 'Ana' }
// console.log(pessoa)

// abaixo utilizaremos o "Object.freeze" para congelar o objeto que foi atribuído dentro da const pessoa,
// fazendo com que não seja possível editar seus atributos
Object.freeze(pessoa)
pessoa.nome = 'Maria' // não vai surtir efeito porque o objeto está congelado
console.log(pessoa) // { nome: 'Pedro' }

// criando um objeto constante, impossibilitando que qualquer alteração seja feita em seus atributos
const objetoConstante = Object.freeze({ nome: 'Zé' })
console.log(objetoConstante)
objetoConstante.nome = 'Gumercindo'
console.log(objetoConstante) // { nome: 'Zé' }