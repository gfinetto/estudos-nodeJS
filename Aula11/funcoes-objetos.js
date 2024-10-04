const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199998745', '5511987451414'],
    media: 5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false;
    }
}

console.log(estudante.estaAprovado(7));

console.log(estudante)