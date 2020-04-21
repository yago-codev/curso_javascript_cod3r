let comparaComThis = function (parametro) {
  console.log(this === parametro);
}
comparaComThis(global);

const objeto = {};

comparaComThis = comparaComThis.bind(objeto);

comparaComThis(objeto);

let comparaComThisArrow = parametro => console.log(this === parametro);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(objeto);
comparaComThisArrow(objeto);
comparaComThisArrow(module.exports);
