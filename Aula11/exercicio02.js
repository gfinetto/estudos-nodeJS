const pessoa = {
    nome: 'João',
    idade: 28,
    solteiro: false,
    hobbies: ['Poker', 'Tocar violão', 'Correr', 'Cozinhar'],
    endereco: {
        rua: 'Avenida PotterHouse',
        numero: '234',
        bairro: 'Jardim Hogwarts',
        cidade: 'Hogwarts',
        estado: 'Bruxelas'
    }
};

function imprimeObj(obj) {
    console.log('Informações da Pessoa: ');
    console.log(`Nome: ${pessoa.nome} Tipo: ${typeof pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade} Tipo: ${typeof pessoa.idade}`);
    console.log(`Solteiro: ${pessoa.solteiro} Tipo: ${typeof pessoa.solteiro}`);
    console.log(`Hobbies: ${pessoa.hobbies.join(', ')} Tipo: ${typeof pessoa.hobbies}`);
    console.log('Endereço: ');
    console.log(`Rua: ${pessoa.endereco.rua}`);
    console.log(`Número: ${pessoa.endereco.numero}`);
    console.log(`Bairro: ${pessoa.endereco.bairro}`);
    console.log(`Cidade: ${pessoa.endereco.cidade}`);
    console.log(`Estado: ${pessoa.endereco.estado}`);
 }

 imprimeObj(pessoa);