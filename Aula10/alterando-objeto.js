const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript'
}

//Adicionando informações:

estudante.telefone = '551136257841';
console.log(estudante);

//Alterando informações do objeto:

estudante.nome = 'José Santos';
console.log(estudante);

//Criando e adicionando infos em um objeto vazio:

const estudanteDois = {};

estudanteDois.nome = 'Gabriel Alvez';
estudanteDois.idade = 20;

console.log(estudanteDois);