const soma = function (x, y) {
  return x + y;
}

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
}

imprimirResultado(2, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(4, 3, (x, y) => x - y);

const pessoa = {
  falar() {
    console.log('Opa');
  }
}
pessoa.falar();