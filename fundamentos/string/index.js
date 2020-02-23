const escola = 'Cod3r';

// através do chartAt() iremos obter um array da string a qual a função foi aplicada. 
console.log(escola.charAt(4)); // resultado = retorna a letra do índice 4... a letra 'r'

// através do charCodeAt() iremos obter o código do caractere dentro da tabela ASC:
console.log(escola.charCodeAt(4)); // a string de índice 4, ou seja, a letra 'r' possui o código 114 no tabela ASC.

// obtendo o índice de um determinado caractere dentro da string através da função indexOf():
console.log(escola.indexOf('r')); // vai retornar 4, porque a letra 'r' é o quarto índice da string

// obtendo somente uma parte de uma string
console.log(escola.substring(1)); // vai retonar 'od3r', porque estamos imprimindo a string do índice 1 em diante

console.log(escola.substring(0, 3)); // vai retornar 'Cod', porque estamos imprimindo do índice 0 ao 3, sem incluir o 3. 

// outra forma de concatenar strings:
console.log('Escola '.concat(escola).concat("!"));

// substituindo caracteres de uma string:
console.log(escola.replace(3, 'e'));

// separando strings através de algum parâmetro e transformando-a em um array:
console.log('1,2,3'.split(',')); // [ '1', '2', '3' ];