// function executaOperacaoEmArray(arr, funcaoCallback){
//     return arr.map(funcaoCallback); // Executa a funcão de callback em cada elemento do array 
// }

// function dobraNum(num) {
//     return num * 2; // Função de exemplo para dobrar o número; 
// }

// const listaNumeros = [1, 2, 3, 4, 5];
// const listaNumerosDobrados = executaOperacaoEmArray(listaNumeros, dobraNum);

// console.log(listaNumerosDobrados);

function executaOperacaoEmArray(arr, funcaoCallback){
    return arr.map(funcaoCallback);
}

function somaNum(elemento) {
  return elemento + 1;
}

let numeros = [1, 2, 3, 4 ,5];
let somaMaisUm = executaOperacaoEmArray(numeros, somaNum);
console.log(somaMaisUm);