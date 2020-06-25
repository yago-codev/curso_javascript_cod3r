const a = 1
const b = 2
const c = 3

// atribuição de valores em atributos de objetos antes do ES2015
const obj1 = { a: a, b: b, c: c }
console.log(obj1) // { a: 1, b: 2, c: 3 }

// atribuição de valores em atributos de objetos a partir do ES2015
const obj2 = { a, b, c }
console.log(obj2) // { a: 1, b: 2, c: 3 }

// criando atributos de objetos dinamicamente utilizando strings a partir de variáveis
const nomeAtributo = 'nota'
const valorAtributo = 7.87

const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3) // { nota: 7.87 }

const obj4 = {[ nomeAtributo ]: valorAtributo}
console.log(obj4) // { nota: 7.87 }

const obj5 = {
  // criando função em objeto antes do ES2015
  funcao1: function() {
    // ...
  },
  // criando função em objeto a partir do ES2015
  funcao2() {
    // ...
  }
}

console.log(obj5)