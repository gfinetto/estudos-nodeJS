function somaNumeros(array) {
    return array.reduce((acumulador, numero) => numero + acumulador, 0);
}

const numeros = [0, 1, 2, 3, 4, 10, 12, 15, 18, 20, 24, 27, 30, 34]

const somaTotal = somaNumeros(numeros);
console.log(`A soma total dos números do array é: ${somaTotal}`);