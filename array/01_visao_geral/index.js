console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]); // Bia
console.log(aprovados[1]); // Carlos
console.log(aprovados[2]); // Ana
console.log(aprovados[3]); // undefined

// inserindo elementos no array:
aprovados[3] = 'Paulo'; // diretamente pelo índice, mais utilizando em casos de substituição de valores
aprovados.push('Bruna'); // passando o valor inserido como parâmetro da função push, que irá inserir o valor no final do array

// retornando o tamanho do array(número total de elementos):
console.log(aprovados.length);

aprovados[9] = 'Rafael'; // os ítens que não possuírem nenhum valor atribuído irão ficar vazios.
console.log(aprovados); // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Bruna', <4 empty items>, 'Rafael' ]
console.log(aprovados[5]); // undefined
console.log(aprovados.length); // 10 
console.log(aprovados[8] === undefined); // true

// ordenando arrays:
aprovados.sort();
console.log(aprovados); // ordenação em ordem alfabética

// deletando elementos de arrays:
delete aprovados[1]; // deleta sem alterar a ordem dos índices do array
console.log(aprovados[1]); // undefined
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana'];

// removendo elementos com splice():
// - o primeiro parâmetro do splice() é a partir de qual elemento queremos operar,
// - o segundo parâmetro corresponde ao número de elementos que iremos tirar do array,
aprovados.splice(1, 2);
console.log(aprovados);

// adicionando elementos com splice():
// - o primeiro parâmetro do splice() é a partir de qual elemento queremos operar,
// - o segundo parâmetro corresponde ao número de elementos que iremos tirar do array,
// - o terceiro parâmetro corresponde aos elementos que serão adicionados
aprovados.splice(1, 2, 'Elemento4', 'Elemento5');
console.log(aprovados);

// adicionando elementos em posições específicas sem remover nada do array:
aprovados.splice(1, 0, 'Elemento2', 'Elemento3');
console.log(aprovados);