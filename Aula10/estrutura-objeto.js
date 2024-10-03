const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript'
}

console.log(estudante.nome); //acessamos as propriedades do objeto com notações de ponto. 
console.log(`O nome de estudante é: ${estudante.nome}`);
console.log(`Os três primeiros digitos do CPF são: ${estudante.cpf.substring(0, 3)}.`);