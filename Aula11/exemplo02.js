//Usando o Objetc.create

// const pessoa = {
//     nome: 'João',
//     idade: 35,
//     profissao: 'Desenvolvedor'
// };

// const eu = Object.create(pessoa);
// eu.nome = 'Maria';
// eu.idade = 22;

// console.log(pessoa);
// console.log(eu);


const animalEstimacao = {
    nome: 'puggy',
    idade: 5,
    raca: 'labrador',
    ehAdestrado: true
};

const animalEstimacaoDois = Object.create(animalEstimacao);
animalEstimacaoDois.nome = 'Fiona';

console.log(animalEstimacao.nome);
console.log(animalEstimacaoDois.nome);