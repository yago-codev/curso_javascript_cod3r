function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log(`Aprovado com ${nota}`);
  }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeFalo(valor) {
  // se o valor passado como parâmetro pra função for verdadeiro, executaremos a sentença de código abaixo...
  if (valor) {
    console.log(`É verdade... ${valor}`);
  }
}

// quando não passamos nada pra função que está esperando um parâmetro, esse valor é assumido como undefined (false)
seForVerdadeFalo();
seForVerdadeFalo(null); // false
seForVerdadeFalo(undefined); // false
seForVerdadeFalo(NaN); // false
seForVerdadeFalo(""); // string vazia (false)
seForVerdadeFalo(0); // o ZERO é o único número que irá retornar false
//
seForVerdadeFalo(-1); // -1 é true
seForVerdadeFalo(" "); // string com espaço em branco (true)
seForVerdadeFalo("?"); // true
seForVerdadeFalo([]); // true
seForVerdadeFalo([1, 2]); // true
seForVerdadeFalo({}); // true
