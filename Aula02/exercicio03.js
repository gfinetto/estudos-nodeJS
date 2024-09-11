const numero = 7;
const nome = 'Mariana';
let ehAluno = false;

if (ehAluno){
    ehAluno = "Sim, ele ainda é aluno (a)";
} else {
    ehAluno = "Não, ele não é mais aluno (a)";
}

const texto = `A ${nome} tem o numero ${numero} na chamada de sua turma. Ela ainda é aluno? ${ehAluno}`;

console.log(texto);
