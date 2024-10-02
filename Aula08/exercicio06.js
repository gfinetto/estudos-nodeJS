function executaOperacaoEmArray(arr, funcaoCallback )  {
    return arr.map(funcaoCallback)
}

function dobraNum(num) {
    return num * 2;
}

const numeros = [10, 20, 30, 40, 50];

const numerosDobrados = executaOperacaoEmArray(numeros, dobraNum);

console.log(`A dobra dos números são: ${numerosDobrados}`);

