const sequencia = {
  _valor: 1, // o underline antes do nome de um atributo signifca que ele deve ser privado
  
  // criando um getter para capturar o valor do atributo privado
  get valor() { return this._valor++ },
  
  // criando um setter para modificar o valor do atributo privado
  set valor(valor) { 
    if (valor > this._valor) {
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900 // não vai ser possível fazer essa atribuição através do setter, pois criamos uma validação
console.log(sequencia.valor, sequencia.valor)