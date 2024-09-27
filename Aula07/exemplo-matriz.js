const primeiroBi = [7, 6.5, 9, 8.4];
const segundoBi = [8, 5, 6.7, 8.8];

const primeiroSemestre = [primeiroBi, segundoBi];

let media = 0;

for(let i = 0; i < primeiroSemestre.length; i++) {
    for (let j = 0; j < primeiroSemestre[i].length; j++) {
        media += primeiroSemestre[i][j] / primeiroSemestre[i].length;
    }
}

media = media / primeiroSemestre.length;

console.log(`O valor da média do aluno é: ${media.toFixed(2)}`);
