const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript'
}

estudante.nome // José Silva - notação de ponto 

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'turma'));


console.log(estudante['nome']); //Notação por colchetes 
console.log(estudante['turma']);

console.log(estudante['pet']); //Quando tento acessar uma chave que não existe em um objeto, ele não dará erro, me retornará undefined. 