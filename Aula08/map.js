//Exercicio somando +1 em cada elemento do array

const notas = [10, 9.5, 8, 7, 6];

// const notasAtualizadas = notas.map(function (nota){
//     return nota +1;
// })

//Refatorando o código usando arrow function e criando regra com operador ternário p/ não somar quando a nota já for 10. 

const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);

console.log(notasAtualizadas);

