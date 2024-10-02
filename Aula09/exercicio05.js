const numeros = [0, 1, 2, 3, 4, 10, 12, 15, 18, 20, 24, 27, 30, 34];

function filtraNumeros(array){
    return array.filter((numero) => numero % 3 === 0 && numero > 5);
}

const numerosFiltrados = filtraNumeros(numeros);

console.log(`Os números filtrados são: ${numerosFiltrados}`);