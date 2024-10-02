const numeros = [6, 9, 12, 15, 18, 21];

console.log('Elementos do array multiplicados por 3: ');

numeros.forEach(elemento => {
    const resultado = elemento * 3;
    console.log(resultado);
})

const indiceDoNumero18 = numeros.findIndex(elemento => elemento === 18);

    if (indiceDoNumero18 !== -1) {
        console.log(`O número 18 está no índice ${indiceDoNumero18}.`);
    }else {
        console.log('O número 18 não está presente no array');
    }