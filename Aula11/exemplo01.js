//Utilizando o this em funções 

// const pessoa = {
//     nome: 'Maria',
//     idade: 30,
//     apresentar: function() {
//         console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
//     }
// };

// pessoa.apresentar();


// Usando arrow function - o this não funciona. 

const pessoa = {
    nome: "João",
    idade: 25,
    apresentar: () => {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
  };
  
  pessoa.apresentar(); // Saída: Olá, meu nome é undefined e eu tenho undefined anos.