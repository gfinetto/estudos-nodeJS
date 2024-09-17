const valor = 60;
const texto = valor > 50 ? 'Valor insuficiente' : 'Valor suficiente';
console.log(texto);
console.clear();

// Operador Ternário
// O operador ternário é normalmente utilizado em substituição ao if...else em que as condições têm apenas uma linha de retorno
// Exemplo: 


//Lógica utilizando if...else

// let matriculaAtiva = true; 

// function verificaMatriculaAtiva() {
//     if (matriculaAtiva === true) {
//         return 'Matricula Ativa no Sistema';
//     }else {
//         return 'Matrícula Não Está Ativa';
//     }
// }

// console.log(verificaMatriculaAtiva());

//Lógica utilziando o operador ternário

let matriculaAtiva = false;

function verificaMatriculaAtiva() {
    return matriculaAtiva ? 'Matricula Ativa' : 'Matricula não costa no sistema';
}

console.log(verificaMatriculaAtiva());
console.clear();

//Exemplo 2 

//Utilzando a lógica com if..else

// let idadeEstudante = 16;
// let precisaDeAutorizacao;

//     if (idadeEstudante < 18) {
//         precisaDeAutorizacao = true
//     }else{
//         precisaDeAutorizacao = false;
//     }

//     console.log(precisaDeAutorizacao);

//Utilizando o operador ternário

let idadeEstudante = 16;
const precisaDeAutorizacao = idadeEstudante < 18 ? true : false;
console.log(precisaDeAutorizacao);
console.clear();



//Exercicio 1 - módulo

// let valor1 = '5';
// let valor2 = 5;

// let resultado1 = valor1 + valor2;
// let resultado2;

// if (valor1 === valor2) {
//  resultado2 = 'Os valores são iguais.';
// } else {
//  resultado2 = 'Os valores são diferentes.';
// }

// console.log('Resultado 1:', resultado1);
// console.log('Resultado 2:', resultado2);


