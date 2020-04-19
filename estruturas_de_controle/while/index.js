// o while é geralmente utilizado quando temos uma quantidade
// indeterminada no número de repetições na qual teremos que iterar
// porém, isso não significa que não possamos utilizar o while 
// assosiada a uma quantidade determinada de repetições
// o while irá receber uma expressão booleana,
// e só irá parar de executar o que estiver dentro do bloco quando o valor 
// dessa sentença seja igual a false.
function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

while (opcao !== -1) {
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`O número aleatório é: ${opcao}.`);
}

console.log(10);