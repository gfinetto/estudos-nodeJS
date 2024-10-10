const listapessoas = [
    {
        nome: 'João',
        idade: 22,
        cidade: 'Araraquara'
    },
    {
        nome: 'Franciele',
        idade: 44,
        cidade: 'Manaus'
    },
    {
        nome: 'Josafá',
        idade: 39,
        cidade: 'Barueri'
    }
]

function mostrarListaPessoas(pessoas) {
    console.log('Lista de Pessoas');
    pessoas.forEach((pessoa) => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    });
}

mostrarListaPessoas(listapessoas);

listapessoas.push({ nome: 'Ana', idade: 25, cidade: 'Nova York'});

mostrarListaPessoas(listapessoas);

function filtrarCidade (pessoas, cidade) {
   return pessoas.filter((pessoa) => pessoa.cidade === cidade)
}

const pessoaNY = filtrarCidade(listapessoas, 'Nova York');
console.log('Pessoas em Nova York: ');
console.log(pessoaNY);