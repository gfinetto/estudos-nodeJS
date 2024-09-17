
function dividir(dividendo, divisor) {
    if (divisor !== 0) {
        return dividendo / divisor;
    }else {
        return 'Favor não dividir por zero';
    }
}

const resultado = dividir(10, 5);
console.log(resultado);

const resultadoZero = dividir(10, 0);
console.log(resultadoZero);