const valores = [10, 20, 30, 40];

let soma = valores.reduce((acumulador, numero) => numero + acumulador, 0);

console.log(soma);