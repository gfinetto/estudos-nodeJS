function filtraNumerosPares(array) {
    return array.filter((numero) => numero % 2 === 0); //Verifica e retorna apenas os números pares 
}

const numeros = [0, 1, 2, 3, 4, 10, 12, 15];

const numerosPares = filtraNumerosPares(numeros);

console.log(`Os números pares são: ${numerosPares}`);