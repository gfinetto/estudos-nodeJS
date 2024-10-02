const numeros = [10, 20, 30, 40, 50];

const numeroProcurado = 25;

let posicao = -1;

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] === numeroProcurado){
        posicao = i;
        break;
    }
}

console.log(`A posição do número ${numeroProcurado} é: ${posicao}`);