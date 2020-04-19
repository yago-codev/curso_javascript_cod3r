const imprimirResultado = function (nota) {
  if (nota >= 7) {
    console.log('Aprovado!');
  } else {
    console.log('Reprovado!');
  }
}

imprimirResultado(10);
imprimirResultado(6.9);

// por o JS ser fracamente tipado, ele não irá acusar erro 
// quando tertarmos passar uma string como parâmetro pra 
// uma função que deveria tratar somente de numbers.
// devemos ter cuidado com isso!
imprimirResultado('Epa!');