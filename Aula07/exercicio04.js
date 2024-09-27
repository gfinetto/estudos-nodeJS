const numeros = [10, 20, 30, 20, 20];



function somaArr(arr) {
    let somaNumeros = 0;
    for(let i = 0; i < arr.length; i++){
        somaNumeros += arr[i];
    }   
    return somaNumeros;
}

console.log(somaArr(numeros));