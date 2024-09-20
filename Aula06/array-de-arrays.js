const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const notas = [10, 8, 7.5, 9];

//              [0]      [1]
const lista = [alunos, notas];

console.log(
    `O aluno do índice 0 da lista é: ${lista[0][0]}.
     A média desse aluno é: ${lista[1][0]}`
);
