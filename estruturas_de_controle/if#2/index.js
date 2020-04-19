// quando não usamos {} para delimitar um bloco, 
// somente uma única linha será associada com o if,
// portanto o console.log('final') abaixo não está relacionado com o bloco do if,
// mas sim com o escopo da função.
// ou seja, o console.log('final') sempre será executado. 

function teste1(num) {
  if (num > 7)
    console.log(num)

  console.log('final');
}

teste1(6);
teste1(8);