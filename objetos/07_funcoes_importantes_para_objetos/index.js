const pessoa = {
  nome: 'Rebeca',
  idade: 22,
  peso: 55
}

// retornando as chaves de um objeto através do "Object.keys"
console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso' ]

// retornando os valores de um objeto através do "Object.values"
console.log(Object.values(pessoa)) // [ 'Rebeca', 22, 55 ]

// retornando um array que irá conter arrays separados para cada chave/valor contido no objeto
console.log(Object.entries(pessoa)) // [ [ 'nome', 'Rebeca' ], [ 'idade', 22 ], [ 'peso', 55 ] ]

// percorrendo o array contido em Object.entries, exibindo os índices 0 e 1 de cada chave/valor presente no objeto
Object.entries(pessoa).forEach(elemento => {
  console.log(`${elemento[0]}: ${elemento[1]}`) // nome: Rebeca ...
})

// percorrendo o array, mas dessa vez utilizando a desestruturação para pegar diretamente a chave/valor
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

// criando atributo de objetos com Object.defineProperty()
// Object.defineProperty() vai fazer com que tenhamos controle total sobre os atributos criados
Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, // a propriedade poderá ser listada quando acessarmos os atributos do objeto com algo como o Object.keys?
  writable: false, // a propriedade poderá ser modificada?
  value: '01/01/2020'
})

pessoa.dataNascimento = '01/01/2021' // não vai ser possível fazer reatribuições no valor da propriedade por causa do "writable"
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) // vamos conseguir listar o atributo 'dataNascimento' por causa do 'enumerable: true'

// Object.assign (ES2015)
// através do Object.assign nós poderemos atribuir chaves/valores para um determinado objeto a partir de outros objetos.
// no exemplo abaixo, pegaremos o objeto "dest" e incluiremos as props presentes no objeto "o1 e o2".
// devemos prestar atenção no seguinte: no objeto "dest" nós já temos uma propriedade chamada "a", 
// e essa propriedade se repete no objeto "o2".
// o que acontecerá é que o objeto "dest" terá o valor da sua propriedade "a" sobrescrito pelo valor presente em "a" do objeto "o2"
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }

const obj = Object.assign(dest, o1, o2)
console.log(obj) // { a: 4, b: 2, c: 3 }