function recebeArrays(...arrays) {
    return [].concat(...arrays); //operator spread para concatenar arrays
}

const numeros01 = [0, 1, 2, 3 ,4];
const numeros02 = [5, 6, 7];
const numeros03 = [8, 9, 10];

const arraysConcatenados = recebeArrays(numeros01, numeros02, numeros03);
console.log(arraysConcatenados);