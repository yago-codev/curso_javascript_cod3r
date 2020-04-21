// Factory Function é uma função que cria um objeto.
// Factory Function é uma função que fabrica a instância de um objeto.

// Factory Function simples:
function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}

console.log(criarPessoa());