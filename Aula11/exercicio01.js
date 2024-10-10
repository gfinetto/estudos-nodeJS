const pessoa = {
    nome: 'João',
    idade: 28,
    solteiro: false,
    hobbies: ['Poker', 'Tocar violão', 'Correr', 'Cozinhar']
};

const pessoaDois = {
    nome: 'Maria',
    idade: 31,
    solteiro: true,
    hobbies: ['Esportes Radicais', 'Ir a shows', 'Correr', 'Programar']
};


function imprimeObj(obj) {
   console.log('Informações da Pessoa: ');
   console.log(`Nome: ${pessoa.nome} Tipo: ${typeof pessoa.nome}`);
   console.log(`Idade: ${pessoa.idade} Tipo: ${typeof pessoa.idade}`);
   console.log(`Solteiro: ${pessoa.solteiro} Tipo: ${typeof pessoa.solteiro}`);
   console.log(`Hobbies: ${pessoa.hobbies.join(', ')} Tipo: ${typeof pessoa.hobbies}`);
}

function imprimeObjDois(obj) {
    console.log('Informações da Pessoa: ');
    console.log(`Nome: ${pessoaDois.nome} Tipo: ${typeof pessoaDois.nome}`);
    console.log(`Idade: ${pessoaDois.idade} Tipo: ${typeof pessoaDois.idade}`);
    console.log(`Solteiro: ${pessoaDois.solteiro} Tipo: ${typeof pessoaDois.solteiro}`);
    console.log(`Hobbies: ${pessoaDois.hobbies.join(', ')} Tipo: ${typeof pessoaDois.hobbies}`);
 }

imprimeObj(pessoa);
imprimeObjDois(pessoaDois);