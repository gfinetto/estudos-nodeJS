const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199998745', '5511987451414'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }]
}

estudante.enderecos.push({
    rua: 'Major Sertório', 
    numero: '24B',
    complemento: ''
})

const listaEnderecoComComplemento = estudante.enderecos.filter((endereco) => endereco.complemento); //Já que agora o objeto está dentro de um array, podemos utilizar métodos de arrays para manipula-los. Nesse caso usamos o método filter() que sempre retorna um valor true ou false
console.log(listaEnderecoComComplemento);