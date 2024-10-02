const numeros = [25, 35, 45, 55, 65];

const numeroProcurado = 55;

let posicao = -1;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroProcurado){
        posicao = i;
        break;
    }
}

console.log(`O número procurado é ${numeroProcurado} e está na posicação ${posicao}`);

