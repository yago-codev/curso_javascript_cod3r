let meuArray = ['0', '1', '2', '3'];

meuArray.pop() // remove o último elemento do array
console.log(meuArray);

meuArray.push('3');
console.log(meuArray);

meuArray.shift() // remove o primeiro elemento do array
console.log(meuArray);

meuArray.unshift('0'); // insere um elemento no primeiro índice do array
console.log(meuArray);

// adicionando elementos com splice() :
meuArray.splice(2, 0, '1.1', '1.2');
console.log(meuArray);

// removendo elementos com splice() :
meuArray.splice(3, 1);
console.log(meuArray);

meuArray = ['1', '2', '3', '4', '5', '6', '7'];

// copiando e gerando um novo array com slice() :
const copiaArray = meuArray.slice(2); // vai copiar o conteúdo do meuArray a partir do segundo elemento
console.log(copiaArray);

// copiando e gerando novo array a partir de um determinado segmento, utilizando slice() :
const copiaArray2 = meuArray.slice(1, 7);
console.log(copiaArray2);