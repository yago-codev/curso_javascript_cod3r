const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  valMax: 200
}

console.log(ferrari.__proto__) // acessando o protótipo do objeto pai através de "__proto__"
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // retorna null porque Object.prototype não tem nenhum objeto pai acima dele

function MeuObjeto() {}

// prototype está presente apenas em FUNCOES
console.log(typeof Object) // function
console.log(typeof MeuObjeto) // function
console.log(Object.prototype) // {}
console.log(MeuObjeto.prototype)
