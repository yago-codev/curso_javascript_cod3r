// usando a notação literal:
const obj1 = {};
console.log(obj1);

// usando a função construura Object:
console.log(`O tipo de Object é: ${typeof Object}. 
Quando instanciamos a função construtura Object, seu tipo é: ${typeof new Object()}
`);
const obj2 = new Object();
console.log(obj2);

// usando funções construtoras:
function Produto(nome, preco, desc) {
  (this.nome = nome),
    (this.getPrecoComDesconto = () => {
      return preco * (1 - desc);
    });
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Notebook", 2998.99, 0.25);
console.log(
  p1.getPrecoComDesconto().toFixed(2),
  p2.getPrecoComDesconto().toFixed(2)
);

// usando funções factory:
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = criarFuncionario("João", 7980, 4);
const f2 = criarFuncionario("Maria", 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

// a partir do Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

// parseando JSON para Objeto:
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(typeof fromJSON);
console.log(fromJSON.info);
