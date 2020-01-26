let dobro = function (a) {
  return 2 * a;
}

// refatorando pra arrow function
dobro = a => 2 * a;
console.log(dobro(Math.PI));

let ola = function () {
  return 'Olá';
}

// refatorando pra arrow function
ola = () => 'Olá';