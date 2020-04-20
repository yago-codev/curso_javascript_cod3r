function area(largura, altura) {
  const area = largura * altura

  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2`)
  } else {
    return area
  }
}
console.log(area(2, 2))
// vai retornar NaN porque estamos passando somente 1 parâmetro pra uma 
// função que está esperando dois parâmetros.
// portanto a engine do JS irá atribuir o segundo parâmetro como "undefined".
// number x undefined = NaN
console.log(area(2))
console.log(area()) // retorna NaN pelo mesmo motivo do caso acima.

// abaixo iremos passar mais parâmetros do que a função suporta.
// como a função espera receber apenas dois parâmetros, todos os demais serão ignorados.
console.log(area(2, 2, 2)) // vai retornar 4

// abaixo iremos passar dois valores que irão ultrapassar o valor especificado dentro da condição criada na função,
// isso fará com que um console.log() será impresso, exibindo uma mensagem no console.
// quando o console.log() abaixo for executado, não teremos nada dentro da constante area que foi criada na função,
// portanto o valor undefined será retornado. 
console.log(area(5, 5))