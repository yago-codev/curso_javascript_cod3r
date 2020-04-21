// quando executamos uma função diretamente no escopo global do Node o "this" irá 
// apontar para "Object [global]".

// quando executamos uma função diretamente no navegador, no escopo global,
// o "this" irá apontar para a "window".
function teste() {
  return console.log(this);
}
teste();

// O "this" em JS quando chamado dentro de uma função comum irá apontar para quem está associado a essa função. 
// Por exemplo, se dentro do browser tivermos um <button> e esse botão estiver disparando uma função através 
// de um evento de onclick, o "this" irá apontar para o botão. 
// Mas se essa mesma função estiver associada a um click no body da página, 
// o "this" estará apontando para o body

// ... 

// Em Arrow Functions o "this" nunca irá variar