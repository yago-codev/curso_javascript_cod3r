const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

// 1. Mercedes
// 2. Audi
// 3. BMW
fabricantes.forEach(imprimir);

// 0 Mercedes
// 1 Audi
// 2 BMW
fabricantes.forEach(function (fabricante, indice) {
  console.log(indice, fabricante);
});

fabricantes.forEach((fabricante, indice) => console.log(indice + 1, fabricante));