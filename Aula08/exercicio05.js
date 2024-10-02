const numeros = [10, 20, 30, 40, 50];

//Arrow Function
// numeros.forEach((num, indice) => console.log(`O índice ${indice} pertence ao elemento ${num}`));

function indiceElemento(elemento, indice) {
   console.log(`O índice ${indice} pertence ao elemento ${elemento}`);
}

numeros.forEach(indiceElemento);



