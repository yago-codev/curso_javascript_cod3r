const imprimirResultado = function (nota) {
  // Math.floor() vai arredondar a nota pra baixo
  switch (Math.floor(nota)) {
    // se a nota for 10, executaremos a sentença do escopo do case 9
    case 10:
    case 9:
      console.log('Quadro de Honra');
      break;
    case 8:
    case 7:
      console.log('Aprovado');
      break;
    case 6:
    case 5:
    case 4:
      console.log('Recuperação');
      break;
    case 3:
    case 2:
    case 1:
    case 0:
      console.log('Reprovado');
      break;
    default:
      console.log('Nota inválida');
  }
}

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);