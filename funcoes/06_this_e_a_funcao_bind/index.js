function Pessoa () {
  this.idade = 0;

  // o this vai se perder quando for declarado dentro do setInterval
  setInterval(function () {
    this.idade++;
    console.log(this.idade);
  }, 1000); 
}

// new Pessoa;

// resolvendo o problema acima através do bind
function Pessoa2 () {
  this.idade = 0;

  setInterval(function () {
    this.idade++;
    console.log(this.idade);
  }.bind(this), 1000);
}

// new Pessoa2;

// resolvendo o problema através de uma constante que será declarada antes do setInterval, 
// contendo a referencia de this que vai apontar pro local correto
function Pessoa3 () {
  this.idade = 0;

  const self = this;

  setInterval(function () {
    self.idade++;
    console.log(self.idade);
  }, 1000);
}

new Pessoa3;