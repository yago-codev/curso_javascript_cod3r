function tratarErroELancar(erro) {
  // throw 10 // é possível lançar números dentro do erro
  // throw true // é possível lançar valores booleanos dentro do erro
  // throw 'mensagem' // é possível lançar somente uma string dentro do erro
  // throw {
  //   nome: erro.name,
  //   msg: erro.message,
  //   date: new Date
  // } // é possível lançar um objeto contendo detalhes minuciosos a respeito do erro.
  throw new Error("A propriedade name é undefined!");
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (err) {
    tratarErroELancar(err);
    // o bloco finally será executado independente do erro ocorrer. 
    // se tudo der certo, ele também será executado
  } finally {
    console.log(
      "sentença de código sendo executada apesar do erro ter acontecido!"
    );
  }
}

const obj = { nome: "Roberto" };
imprimirNomeGritado(obj);
